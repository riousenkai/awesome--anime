"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      user_id: DataTypes.INTEGER,
      anime_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.Anime, {
      foreignKey: "anime_id",
    }),
      Review.belongsTo(models.User, {
        foreignKey: "user_id",
      });
  };
  return Review;
};
