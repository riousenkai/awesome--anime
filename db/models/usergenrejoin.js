'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGenreJoin = sequelize.define('UserGenreJoin', {
    genre_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  UserGenreJoin.associate = function(models) {
    // associations can be defined here
  };
  return UserGenreJoin;
};