module.exports.utilisateurDo = async (utilisateur) => {
    // instance des models
    const Utilisateur = require("./models/Utilisateur");
    const Role = require("./models/Role");

    // relation entre les tables
    Role.hasMany(Utilisateur, { as: "Utilisateurs", foreignKey: "utilisateurId" });
    Utilisateur.belongsTo(Role, { as: "Role", foreignKey: "utilisateurId" });

    // afficher les erreurs
    const errHandler = (err) => {
        console.error("Error : ", err);
    };

    // insère dans les tables
    const role = await Role.create({
        label: "Juré"
    }).catch(errHandler);

    const ut = await Utilisateur.create({
        identifiant: utilisateur.identifiant,
        motdepasse: utilisateur.motdepasse,
        roleId: role.id
    }).catch(errHandler);
    console.log(ut);

};