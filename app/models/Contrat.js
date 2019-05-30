const Sequelize = require("sequelize");

module.exports = sequelize.define("contrat",{
    id : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    freezeTableName: true

});