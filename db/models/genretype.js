'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenreType = sequelize.define('GenreType', {
    genre: DataTypes.STRING
  }, {});
  GenreType.associate = function(models) {
    const colMap = { foreignKey: 'genre_id', through: 'GenreAnimeJoin', otherKey: 'anime_id' }
    GenreType.belongsToMany(models.Anime, colMap)
    const colMap2 = { foreignKey: 'genre_id', through: 'UserGenreJoin', otherKey: 'user_id' }
    GenreType.belongsToMany(models.UserAnimeList, colMap2)
  };
  return GenreType;
};
