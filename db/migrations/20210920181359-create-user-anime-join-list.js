'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserAnimeJoinLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      anime_list_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'UserAnimeLists' }
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
    return queryInterface.dropTable('UserAnimeJoinLists');
  }
};
