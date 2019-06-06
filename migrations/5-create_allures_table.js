'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("allures", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      idutilisateur: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'utilisateurs',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("allures")
  }
};
