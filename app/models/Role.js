// const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    var Role = sequelize.define("role", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        label: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });
    Role.associate = function (models) {
        Role.hasMany(models.utilisateur);
    }
};
