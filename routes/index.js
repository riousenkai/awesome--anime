const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {
  User,
  Anime,
  UserAnimeList,
  GenreType,
  UserGenreJoin,
  GenreAnimeJoin,
} = require("../db/models");
const { asyncHandler, csrfProtection } = require("./utils");
const {
  loginUser,
  logoutUser,
  requireAuth,
  noLoginRegister,
} = require("../auth");
const { check, validationResult } = require("express-validator");

let express = require("express");
let router = express.Router();

const loginValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an appropriate password"),
];

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const winterAnime = await Anime.findAll({
      where: {
        winter: true,
      },
      limit: 5,
    });
    const topAnime = await Anime.findAll({
      where: {
        top: true,
      },
      limit: 5,
    });
    if (req.session.auth) {
      const { userId } = req.session.auth;
      const recommendedUserGenres = await UserGenreJoin.findAll({
        where: {
          user_id: userId,
        },
      });
      const recommendedUserGenresFiltered = recommendedUserGenres.map(
        (genreObject) => {
          return genreObject.genre_id;
        }
      );
      const recommendedAnime = await GenreAnimeJoin.findAll({
        where: {
          genre_id: [...recommendedUserGenresFiltered],
        },
      });
      const recommendedUserGenresFiltered2 = recommendedAnime.map(
        (animeObject) => {
          return animeObject.anime_id;
        }
      );
      const finallyWeAreDoneOmg = await Anime.findAll({
        where: {
          id: [...recommendedUserGenresFiltered2],
        },
        limit: 5,
      });

      return res.render("index", {
        title: "awesome/Anime Home",
        finallyWeAreDoneOmg,
        winterAnime,
        topAnime,
      });
    } else {
      return res.render("index", {
        title: "awesome/Anime Home",
        winterAnime,
        topAnime,
      });
    }
  })
);

// Get user config
router.get(
  "/preferences",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const genres = await GenreType.findAll();
    return res.render("preferences", { title: "Preferences", genres });
  })
);

router.get(
  "/login",
  noLoginRegister,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    return res.render("login-page", {
      title: "Login",
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/login",
  loginValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    let errors = [];
    const validateErrors = validationResult(req);

    if (validateErrors.isEmpty()) {
      let user = await User.findOne({
        where: {
          username,
        },
      });
      if (user) {
        const userPassword = user.password;
        if (await bcrypt.compare(password, userPassword)) {
          loginUser(req, res, user);
          return req.session.save(() => {
            res.redirect("/");
          });
          // return res.redirect("/");
        }
      }
      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validateErrors.array().map((error) => error.msg);
    }
    return res.render("login-page", {
      title: "Login",
      username,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.get("/register", noLoginRegister, csrfProtection, (req, res) => {
  let user = User.build();
  return res.render("register-page", {
    title: "Register",
    user,
    csrfToken: req.csrfToken(),
  });
});

let strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please input a username")
    .isLength({ max: 25 })
    .withMessage(
      "Your username should have less than 25 characters. Sue your parents."
    )
    .custom(async (username) => {
      const user = await User.findOne({
        where: {
          username: username,
        },
      });
      if (user) {
        return Promise.reject("The username is already taken.");
      }
    }),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email.")
    .isLength({ max: 355 })
    .withMessage("Pretty sure emails can't be that long")
    .isEmail()
    .withMessage("You need the dots and coms")
    .custom(async (email) => {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (user) {
        return Promise.reject("This email is already used.");
      }
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an appropriate password")
    .isLength({ max: 50, min: 8 })
    .withMessage("Passwords have to be between 8-50 characters")
    .matches(strongRegex)
    .withMessage(
      "Please use a strong password with at least one uppercase letter, one lowercase letter, one number and one special character."
    ),
  check("passwordConfirmation")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password.")
    .custom(async (passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        return Promise.reject(`Passwords must match.`);
      }
    }),
];

router.post(
  "/register",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = User.build({ email, username });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();

      UserAnimeList.create({
        name: "Watched",
        user_id: user.id,
        type: 1,
      });
      UserAnimeList.create({
        name: "Want to watch",
        user_id: user.id,
        type: 2,
      });
      UserAnimeList.create({
        name: "Currently watching",
        user_id: user.id,
        type: 3,
      });
      UserAnimeList.create({
        name: "Favorites",
        user_id: user.id,
        type: 4,
      });

      loginUser(req, res, user);
      return req.session.save(() => {
        res.redirect("/preferences");
      });
      // return res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      return res.render("register-page", {
        title: "Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get(
  "/search",
  asyncHandler(async (req, res) => {
    return res.render("search-page", { title: "Live Search" });
  })
);

router.post(
  "/search",
  asyncHandler(async (req, res) => {
    const { search } = req.body;

    const results = await Anime.findAll({
      where: {
        title: {
          [Op.iLike]: `%${search}%`,
        },
      },
    });
 
    return res.render("search-results", {
      results,
      title: `Search Results For: ${search}`,
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  return req.session.save(() => {
    res.redirect("/");
  });
});

module.exports = router;
