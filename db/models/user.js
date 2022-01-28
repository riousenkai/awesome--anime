'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.TEXT,
    profile_pic_url: DataTypes.STRING,
    dark_mode: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review, {
      foreignKey: 'user_id'
    })
    User.hasMany(models.UserAnimeList, {
      foreignKey: 'user_id'
    })
    const colMap = { foreignKey: 'user_id', through: 'UserGenreJoin', otherKey: 'genre_id' }
    User.belongsToMany(models.GenreType, colMap)
  };
  return User;
};
