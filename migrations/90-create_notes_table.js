'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("notes", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idepreuve: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'epreuves',
          key: 'id'
        },
        allowNull: false
      },
      iddossard: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'dossards',
          key: 'id'
        },
        allowNull: false
      },
      idcontrat: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'contrats',
          key: 'id'
        },
        allowNull: false
      },
      idallure: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'allures',
          key: 'id'
        },
        allowNull: false
      },
      idstyle: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'styles',
          key: 'id'
        },
        allowNull: false
      },
      idpenalite: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'penalites',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      UpdatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("notes")
  }
};
