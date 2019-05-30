module.exports = async () => {
    const Utilisateur = require("./models/Utilisateur");
    const Role = require("./models/Role");
    const Niveau = require("./models/Niveau");
    const Dossard = require("./models/Dossard");

    Role.hasMany(Utilisateur, { as: "Utilisateurs", foreignKey: "utilisateurId" });
    Utilisateur.belongsTo(Role, { as: "Role", foreignKey: "utilisateurId" });
    Niveau.hasMany(Dossard, { as: "Dossards", foreignKey: "dossardId" });
    Dossard.belongsTo(Niveau, { as: "Niveau", foreignKey: "dossardId" });


    const errHandler = (err) => {
        console.error("Error : ", err);
    };

    const role = await Role.create({
        label: "Juré"
    }).catch(errHandler);

    const utilisateur = await Utilisateur.create({
        identifiant: "maxence.watrin",
        motdepasse: "azertyuiop",
        roleId: role.id
    }).catch(errHandler);

    const niveau = await Niveau.create({
        label: "débutant"
    }).catch(errHandler);

    const dossard = await Dossard.create({
        numero: 12,
        niveauId: niveau.id
    }).catch(errHandler);
};