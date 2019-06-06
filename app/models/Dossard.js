// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Dossard = sequelize.define("dossard", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        numero: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: true,
        },
    });
    Dossard.associate = function (models) {
        Dossard.belongsTo(models.niveau);
    };
    Dossard.associate = function (models) {
        Dossard.hasMany(models.note);
    };
}