'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Animes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      poster_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      studio: {
        allowNull: false,
        type: Sequelize.STRING
      },
      episodes: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      aired: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.STRING
      },
      top: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false
      },
      winter: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false
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
    return queryInterface.dropTable('Animes');
  }
};
