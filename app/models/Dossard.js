const Sequelize = require("sequelize");

module.exports = sequelize.define("dossard", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    numero: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        unique: true,
    },
});