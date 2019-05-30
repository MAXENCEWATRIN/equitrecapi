'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("resultats",{
      id : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt : Sequelize.DATE,
      UpdatedAt : Sequelize.DATE,

      score : {
        type : Sequelize.INTEGER(100),
        defaultValue: 0
      },

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("resultats")
  }
};
