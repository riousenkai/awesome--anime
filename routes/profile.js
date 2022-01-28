const express = require("express");
const router = express.Router();
const { Anime, User, UserAnimeList } = require("../db/models");
const { requireAuth } = require("../auth");
const { asyncHandler } = require("./utils");
const createError = require("http-errors");

// GET user info
router.get(
  "/:userId(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userData = await User.findByPk(req.params.userId);
    const usersList = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: req.params.userId,
      },
    });
    if (userData) {
      res.render("profile", {
        username: userData.username,
        email: userData.email,
        profilePic: userData.profile_pic_url,
        usersList: usersList,
        description: userData.description,
        title: `${res.locals.user.username}s Profile`,
      });
    } else {
      next(createError(404));
    }
  })
);

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userData = await User.findByPk(req.session.auth.userId);
    const usersList = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: req.session.auth.userId,
      },
    });
    res.render("profile", {
      username: userData.username,
      email: userData.email,
      profilePic: userData.profile_pic_url,
      usersList: usersList,
      description: userData.description,
      title: `${res.locals.user.username}s Profile`,
    });
  })
);

module.exports = router;
