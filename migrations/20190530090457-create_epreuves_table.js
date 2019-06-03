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
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE,
      epreuveId: Sequelize.INTEGER(11)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("epreuves")
  }
};
