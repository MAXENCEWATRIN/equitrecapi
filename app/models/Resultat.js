const Sequelize = require("sequelize");

module.exports = sequelize.define("resultat",{
    id : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    score : {
        type : Sequelize.INTEGER(100),
        defaultValue: 0
    },
    freezeTableName: true

});