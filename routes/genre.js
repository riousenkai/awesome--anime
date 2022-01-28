const { GenreType, Anime } = require("../db/models");
const { asyncHandler } = require("./utils");

const express = require("express");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const genreId = req.params.id;
    const animes = await GenreType.findByPk(genreId, {
      include: Anime,
    });
    const allAnime = animes.Animes;
    const genreTitle = animes.genre;
    const genres = await GenreType.findAll();
    res.render("anime-full", {
      allAnime,
      genres,
      genreTitle,
      title: `All ${genreTitle} Anime`,
    });
  })
);

module.exports = router;
