// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Allure = sequelize.define("allure", {
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
    Allure.associate = function (models) {
        Allure.belongsTo(models.utilisateur);
    };
    Allure.associate = function (models) {
        Allure.hasMany(models.note);
    };
};