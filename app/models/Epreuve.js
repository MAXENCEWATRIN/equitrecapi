const Sequelize = require("sequelize");

module.exports = sequelize.define("epreuve",{
    idepreuve : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    label : {
        type : Sequelize.STRING(255),
    },
});