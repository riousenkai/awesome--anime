"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "UserGenreJoins",
      [
        {
          genre_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 2,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 3,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 4,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 5,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            genre_id: 6,
            user_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          genre_id: 7,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 8,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 9,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("UserGenreJoins", null, {});
  },
};
