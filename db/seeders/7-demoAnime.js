"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "UserAnimeJoinLists",
      [
        {
          anime_list_id: 1,
          anime_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          anime_list_id: 1,
          anime_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          anime_list_id: 3,
          anime_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          anime_list_id: 2,
          anime_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          anime_list_id: 2,
          anime_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
    return queryInterface.bulkDelete("UserAnimeJoinLists", null, {});
  },
};
