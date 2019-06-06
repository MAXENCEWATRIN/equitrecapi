// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Dispositif = sequelize.define("dispositif", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        label: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        numero: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: true
        }
    });
    Dispositif.associate = function (models) {
        Dispositif.hasMany(models.epreuve);
    }
};