'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAnimeList = sequelize.define('UserAnimeList', {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    type: DataTypes.INTEGER
  }, {});
  UserAnimeList.associate = function(models) {
    UserAnimeList.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    const colMap = { foreignKey: 'anime_list_id', through: 'UserAnimeJoinList', otherKey: 'anime_id'}
    UserAnimeList.belongsToMany(models.Anime, colMap)
    UserAnimeList.hasOne(models.UserAnimeJoinList, { foreignKey: 'anime_list_id', onDelete: 'CASCADE' })
  };
  return UserAnimeList;
};
