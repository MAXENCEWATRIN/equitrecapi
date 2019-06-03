'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("penalites", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE,
      resultatId: Sequelize.INTEGER(11),
      penaliteId: Sequelize.INTEGER(11)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("penalites")
  }
};
