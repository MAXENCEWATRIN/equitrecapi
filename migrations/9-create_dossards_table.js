'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("dossards", {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            numero: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                unique: true
            },
            idniveau: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'niveaus',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: Sequelize.DATE,
            UpdatedAt: Sequelize.DATE
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("dossards");
    }
};
