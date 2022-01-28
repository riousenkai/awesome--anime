const {
  Anime,
  UserAnimeList,
} = require("../db/models");
const { asyncHandler } = require("./utils");
const { requireAuth } = require("../auth.js");
const { Op } = require("sequelize");

const express = require("express");
const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const lists = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: userId,
      },
    });

    const alists = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: userId,
        type: {
          [Op.lte]: 4
        }
      },
    });

    const customList = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: userId,
        type: {
          [Op.gte]: 5
        }
      },
    });

    res.render("anime-list", {
      lists,
      alists,
      customList,
      userId,
      title: `${res.locals.user.username}s List`,
    });
  })
);

// TEST
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const { options } = req.body;

    // if all option is selected, just redirect back to list page
    if (options === "all") return res.redirect("/list");

    const lists = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: userId,
        id: options,
      },
    });

    const alists = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: userId,
        type: {
          [Op.lte]: 4
        }
      },
    });

    const customList = await UserAnimeList.findAll({
      include: [Anime],
      where: {
        user_id: userId,
        type: {
          [Op.gte]: 5
        }
      },
    });

    res.render("anime-list", {
      lists,
      alists,
      userId,
      customList
    });
  })
);

// Add new list
router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const { name } = req.body;
    const userList = await UserAnimeList.findAll({
      where: { user_id: userId },
    });

    const newList = await UserAnimeList.create({
      name,
      user_id: userId,
      type: userList.length + 1,
    });
  })
);

module.exports = router;
