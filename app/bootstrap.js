module.exports = async () => {
    const Utilisateur = require("./models/Utilisateur");
    const Role = require("./models/Role");

    Role.hasMany(Utilisateur, {as: "Utilisateurs", foreignKey: "utilisateurId"});
    Utilisateur.belongsTo(Role, {as: "Role", foreignKey: "utilisateurId"});

    const errHandler = (err) => {
        console.error("Error : ", err);
    };

    const utilisateur = await Utilisateur.create({
        nom: "maxence.watrin",
        motdepasse: "azertyuiop",
        utilisateurId: utilisateur.id
    }).catch(errHandler);

    const role = await Role.create({
       label: "Juré"
    }).catch(errHandler);


    console.log(utilisateur);
    console.log(role);
};