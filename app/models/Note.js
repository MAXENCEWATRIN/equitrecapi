// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Note = sequelize.define("note", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        }
    });
    Note.associate = function (models) {
        Note.belongsTo(models.epreuve);
    };
    Note.associate = function (models) {
        Note.belongsTo(models.dossard);
    };
};