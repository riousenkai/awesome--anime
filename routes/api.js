const e = require("express");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { Op } = require("sequelize");

const {
  Anime,
  User,
  GenreType,
  Review,
  UserAnimeJoinList,
  UserAnimeList,
} = require("../db/models");

const { asyncHandler } = require("./utils");

/* GET users listing. */

// AnimeReview
// POST /api/anime/:animeId/reviews
// PUT /api/reviews/:reviewId
// DELETE /api/reviews/:reviewId
// AnimeList + UserReadStatus
// POST /api/userAnimeList
// PUT /api/userAnimeList/:userAnimeListId
// DELETE /api/userAnimeList/:userAnimeListId
// DELETE /api/userAnimeList/:userAnimeListId/:animeId

const reviewError = () => {
  let error = {
    title: "Request cannot be completed!",
    status: 404,
  };
  return error;
};

const reviewValidator = [
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a message.")
    .isLength({
      max: 500,
    })
    .withMessage("Message must be less than 500 characters."),
];

router.get(
  "/anime/:animeId/",
  asyncHandler(async function (req, res, next) {
    const animeId = req.params.animeId;
    const animeData = await Anime.findOne({
      include: [GenreType],
      where: {
        id: animeId,
      },
    });
    res.json({ animeData });
  })
);

router.get(
  "/anime/genres/:genreId/",
  asyncHandler(async function (req, res, next) {
    const genreId = req.params.genreId;
    const animeData = await GenreType.findAll({
      include: [Anime],
      where: {
        id: genreId,
      },
    });
    res.json({ animeData });
  })
);

router.post(
  "/anime/:animeId/reviews",
  asyncHandler(async (req, res) => {
    const { description } = req.body;
    const { userId } = req.session.auth;
    const review = await Review.create({
      user_id: userId,
      anime_id: req.params.animeId,
      description,
    });

    return res.json({
      review,
    });
  })
);

router.put(
  "/reviews/:reviewId",
  asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);
    const { description } = req.body;
    if (review) {
      await review.update({
        description,
      });
      res.json({
        review,
      });
    } else {
      next(reviewError());
    }
  })
);

router.delete(
  "/reviews/:reviewId",
  asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);
    if (review) {
      await review.destroy();
      res.json({ message: "success" });
    } else {
      next(reviewError());
    }
  })
);

router.get(
  "/reviews",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    res.json({ reviews });
  })
);

router.get(
  "/reviews/:animeId",
  asyncHandler(async (req, res) => {
    const review = await Review.findAll({
      include: User,
      where: {
        anime_id: req.params.animeId,
      },
      order: [["createdAt", "ASC"]],
    });
    if (req.session.auth) {
      const currSession = req.session.auth.userId;
      return res.json({ review, currSession });
    }
    const currSession = -1;
    res.json({ review, currSession });
  })
);

router.post(
  "/animeList/:animeListId",
  asyncHandler(async (req, res) => {
    const { listId, anime_Id } = req.body;

    const checker = await UserAnimeJoinList.findOne({
      where: {
        anime_list_id: listId,
        anime_id: anime_Id,
      },
    });

    if (!checker) {
      await UserAnimeJoinList.create({
        anime_list_id: listId,
        anime_id: anime_Id,
      });
    }
    res.json({ message: "success" });
  })
);

router.delete(
  "/animeList/:animeListId/:animeId",
  asyncHandler(async (req, res) => {
    const anime_id = req.params.animeId;
    const anime_list_id = req.params.animeListId;

    const join = await UserAnimeJoinList.findOne({
      where: {
        anime_list_id,
        anime_id,
      },
    });

    res.json({ message: "success" });

    return await join.destroy();
  })
);

router.put(
  "/search",
  asyncHandler(async (req, res) => {
    const input = req.body.wya;

    const results = await Anime.findAll({
      where: {
        title: {
          [Op.iLike]: `%${input}%`,
        },
      },
      limit: 10,
    });
    res.json({
      results,
    });
  })
);

router.post(
  "/animeList",
  asyncHandler(async (req, res) => {
    const { list } = req.body;
    const user_id = req.session.auth.userId;

    const newList = await UserAnimeList.create({
      name: list,
      user_id,
      type: 5,
    });
    // Send back review id after posting
    res.json({ reviewId: newList.id });
  })
);

router.delete(
  "/anime-list/delete/:listId/",
  asyncHandler(async (req, res) => {
    const listId = req.params.listId;
    const list = await UserAnimeList.findByPk(listId);

    const entries = await UserAnimeJoinList.findAll({
      where: {
        anime_list_id: listId,
      },
    });

    if (entries) {
      entries.forEach(async (entry) => {
        await entry.destroy();
      });
    }

    res.json({ message: "success" });

    return await list.destroy();
  })
);

router.get(
  "/animeList/user/:userId",
  asyncHandler(async (req, res) => {
    const lists = await UserAnimeList.findAll();

    res.json({ lists });
  })
);

module.exports = router;
