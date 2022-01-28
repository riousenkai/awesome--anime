'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GenreAnimeJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'GenreTypes' }
      },
      anime_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Animes' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GenreAnimeJoins');
  }
};
