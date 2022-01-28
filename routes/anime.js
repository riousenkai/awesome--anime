const {
  Anime,
  Review,
  GenreType,
  UserAnimeList,
  UserGenreJoin,
  GenreAnimeJoin,
} = require("../db/models");
const { asyncHandler } = require("./utils");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// const postReview = require('../public/javascripts/reviews')

const express = require("express");
const router = express.Router();

// All Anime Page,
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allAnime = await Anime.findAll();
    const genres = await GenreType.findAll();
    res.render("anime-full", { allAnime, genres, title: "Anime" });
  })
);

// Recommended
router.get(
  "/recommended",
  asyncHandler(async (req, res) => {
    const genres = await GenreType.findAll();
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
    });
    res.render("anime-full", {
      allAnime: finallyWeAreDoneOmg,
      genres,
      genreTitle: "Recommended",
      title: "Recommended",
    });
  })
);

// Winter
router.get(
  "/winter",
  asyncHandler(async (req, res) => {
    const allAnime = await Anime.findAll({
      where: {
        winter: true,
      },
    });
    const genres = await GenreType.findAll();
    res.render("anime-full", {
      allAnime,
      genres,
      genreTitle: "Winter",
      title: "Winter",
    });
  })
);

// TOP
router.get(
  "/top",
  asyncHandler(async (req, res) => {
    const allAnime = await Anime.findAll({
      where: {
        top: true,
      },
    });
    const genres = await GenreType.findAll();
    res.render("anime-full", {
      allAnime,
      genres,
      genreTitle: "Top",
      title: "Top",
    });
  })
);

/* GET animePage. */
router.get(
  "/:animeId(\\d+)",
  asyncHandler(async (req, res) => {
    const animeData = await Anime.findByPk(req.params.animeId);
    if (req.session.auth) {
      const { userId } = req.session.auth;
      const reviews = await Review.findAll({
        where: {
          anime_id: req.params.animeId,
        },
      });
      const userLists = await UserAnimeList.findAll({
        where: {
          user_id: userId,
          type: [1, 2, 3, 4],
        },
      });
      const customLists = await UserAnimeList.findAll({
        where: {
          user_id: userId,
          type: {
            [Op.not]: [1, 2, 3, 4],
          },
        }
      });

      res.render("anime-page", {
        title: animeData.title,
        description: animeData.description,
        image_url: animeData.image_url,
        poster_url: animeData.poster_url,
        studio: animeData.studio,
        episodes: animeData.episodes,
        status: animeData.status,
        aired: animeData.aired,
        rating: animeData.rating,
        top: animeData.top,
        winter: animeData.winter,
        reviews: reviews,
        userId,
        userLists,
        customLists,
      });
    } else {
      const reviews = await Review.findAll({
        where: {
          anime_id: req.params.animeId,
        },
      });

      res.render("anime-page", {
        title: animeData.title,
        description: animeData.description,
        image_url: animeData.image_url,
        poster_url: animeData.poster_url,
        studio: animeData.studio,
        episodes: animeData.episodes,
        status: animeData.status,
        aired: animeData.aired,
        rating: animeData.rating,
        top: animeData.top,
        winter: animeData.winter,
        reviews: reviews,
      });
    }
  })
);

module.exports = router;
