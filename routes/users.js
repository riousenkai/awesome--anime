const express = require("express");
const router = express.Router();
const { User, UserGenreJoin } = require("../db/models");

const { asyncHandler } = require("./utils");

/* GET users listing. */
router.post(
  "/demo",
  asyncHandler(async function (req, res, next) {
    const demoUser = await User.findOne({
      where: {
        username: "Demo",
      },
    });
    req.session.auth = {
      userId: demoUser.id,
    };
    return req.session.save(() => {
      res.redirect("/");
    });
  })
);

// Darkmode toggle
router.post(
  "/dark",
  asyncHandler(async function (req, res, next) {
    const { userId } = req.session.auth;
    const userData = await User.findOne({
      where: {
        id: userId,
      },
    });
    await userData.update({
      dark_mode: true,
    });
    return req.session.save(() => {
      res.redirect("/");
    });
  })
);

router.post(
  "/light",
  asyncHandler(async function (req, res, next) {
    const { userId } = req.session.auth;
    const userData = await User.findOne({
      where: {
        id: userId,
      },
    });
    await userData.update({
      dark_mode: false,
    });
    return req.session.save(() => {
      res.redirect("/");
    });
  })
);

// Pref
router.post(
  "/pref",
  asyncHandler(async function (req, res, next) {
    const { interests } = req.body;

    if (typeof interests === "string") {
      await UserGenreJoin.create({
        genre_id: interests,
        user_id: req.session.auth.userId,
      });
    } else {
      interests.forEach(async (interest) => {
        await UserGenreJoin.create({
          genre_id: interest,
          user_id: req.session.auth.userId,
        });
      });
    }

    return req.session.save(() => {
      res.redirect("/");
    });
  })
);

module.exports = router;
