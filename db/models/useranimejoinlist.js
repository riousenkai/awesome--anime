'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAnimeJoinList = sequelize.define('UserAnimeJoinList', {
    anime_list_id: DataTypes.INTEGER,
    anime_id: DataTypes.INTEGER
  }, {});
  UserAnimeJoinList.associate = function(models) {
   UserAnimeJoinList.belongsTo(models.UserAnimeList, {foreignKey: 'anime_list_id', onDelete: "CASCADE"})
  };
  return UserAnimeJoinList;
};
