const Sequelize = require("sequelize");

module.exports = sequelize.define("utilisateur",{
    idutilisateur : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nom : {
        type : Sequelize.STRING(255),
        allowNull: false,
        unique : true,
    },
    motdepasse : {
        type : Sequelize.STRING(255),
        allowNull: false
    },


});