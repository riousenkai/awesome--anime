"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "UserAnimeLists",
      [
        {
          name: "Watched",
          user_id: 1,
          type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Want to watch",
          user_id: 1,
          type: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Currently watching",
          user_id: 1,
          type: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Favorites",
          user_id: 1,
          type: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Custom List",
          user_id: 1,
          type: 5,
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
    return queryInterface.bulkDelete("UserAnimeLists", null, {});
  },
};
