// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Style = sequelize.define("style", {
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
    Style.associate = function (models) {
        Style.belongsTo(models.utilisateur);
    };
    Style.associate = function (models) {
        Style.hasMany(models.note);
    };
};