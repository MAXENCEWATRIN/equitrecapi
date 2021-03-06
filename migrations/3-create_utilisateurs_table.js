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
            idrole: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'roles',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: Sequelize.DATE,
            UpdatedAt: Sequelize.DATE
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("utilisateurs")
    }
};
