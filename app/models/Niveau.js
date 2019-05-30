const Sequelize = require("sequelize");

module.exports = sequelize.define("niveau", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    label: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    freezeTableName: true
});