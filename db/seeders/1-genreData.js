"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "GenreTypes",
      [
        {
          genre: "Mystery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Mecha",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Shonen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Psychological",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Sports",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Music",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Slice of Life",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "Action",
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
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("GenreTypes", null, {});
  },
};
