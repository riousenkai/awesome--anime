'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenreAnimeJoin = sequelize.define('GenreAnimeJoin', {
    genre_id: DataTypes.INTEGER,
    anime_id: DataTypes.INTEGER
  }, {});
  GenreAnimeJoin.associate = function(models) {
    // associations can be defined here
  };
  return GenreAnimeJoin;
};