// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Utilisateur = sequelize.define("utilisateur", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        identifiant: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        motdepasse: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    });
    Utilisateur.associate = function (models) {
        Utilisateur.belongsTo(models.role);
    };
    Utilisateur.associate = function (models) {
        Utilisateur.hasMany(models.contrat);
    };
    Utilisateur.associate = function (models) {
        Utilisateur.hasMany(models.allure);
    };
    Utilisateur.associate = function (models) {
        Utilisateur.hasMany(models.style);
    };
    Utilisateur.associate = function (models) {
        Utilisateur.hasMany(models.penalite);
    };
    return Utilisateur;
};