'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("utilisateurs", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      identifiant: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      motdepasse: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE,
      utilisateurId: Sequelize.INTEGER(11)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("utilisateurs")
  }
};
