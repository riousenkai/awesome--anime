'use strict';
module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define('Anime', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    poster_url: DataTypes.STRING,
    studio: DataTypes.STRING,
    episodes: DataTypes.INTEGER,
    status: DataTypes.STRING,
    aired: DataTypes.STRING,
    rating: DataTypes.STRING,
    top: DataTypes.BOOLEAN,
    winter: DataTypes.BOOLEAN
  }, {});
  Anime.associate = function(models) {
    Anime.hasMany(models.Review, {
      foreignKey: 'anime_id'
    })
  const colMap = { foreignKey: 'anime_id', through: 'GenreAnimeJoin', otherKey: 'genre_id' }
  const colMap2 = { foreignKey: 'anime_id', through: 'UserAnimeJoinList', otherKey: 'anime_list_id' }
  Anime.belongsToMany(models.GenreType, colMap)
  Anime.belongsToMany(models.UserAnimeList, colMap2)
  };
  return Anime;
};
