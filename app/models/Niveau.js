// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Niveau = sequelize.define("niveau", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        label: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
    Niveau.associate = function (models) {
        Niveau.hasMany(models.dossard);
    }
};
