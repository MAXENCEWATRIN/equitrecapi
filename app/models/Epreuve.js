// const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Epreuve = sequelize.define("epreuve", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        label: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    });
    Epreuve.associate = function (models) {
        Epreuve.belongsTo(models.dispositif);
    };
    Epreuve.associate = function (models) {
        Epreuve.hasMany(models.note);
    };
};