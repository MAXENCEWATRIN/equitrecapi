// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Penalite = sequelize.define("penalite", {
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
    Penalite.associate = function (models) {
        Penalite.belongsTo(models.utilisateur);
    };
    Penalite.associate = function (models) {
        Penalite.hasMany(models.note);
    };
};