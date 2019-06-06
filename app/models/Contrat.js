// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Contrat = sequelize.define("contrat", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    Contrat.associate = function (models) {
        Contrat.belongsTo(models.utilisateur);
    };
    Contrat.associate = function (models) {
        Contrat.hasMany(models.note);
    };
};