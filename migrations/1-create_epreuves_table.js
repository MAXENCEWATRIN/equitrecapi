'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("epreuves", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      label: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      iddispositif: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'dispositifs',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("epreuves")
  }
};
