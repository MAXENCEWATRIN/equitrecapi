module.exports = async () => {
    const Utilisateur = require("./models/Utilisateur");
    const Role = require("./models/Role");

    Role.hasMany(Utilisateur, {as: "Utilisateurs", foreignKey: "utilisateurId"});
    Utilisateur.belongsTo(Role, {as: "Role", foreignKey: "utilisateurId"});

    const errHandler = (err) => {
        console.error("Error : ", err);
    }

    const role = await Role.create(
        {label: "juré"}
    ).catch(errHandler);

    const utilisateur = await Utilisateur.create({
        nom: "maxence.watrin",
        motdepasse: "azertyuiop",
        idrole: role.idrole,
    }).catch(errHandler);

    const utilisateurJure = await Role.findAll({
        where: {label: 'juré'},
        include: [{model: Utilisateur, as: "Utilisateur"}]
    }).catch(errHandler);

    console.log(utilisateurJure);
}