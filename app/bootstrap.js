module.exports = async () => {
    // instance des models
    const Utilisateur = require("./models/Utilisateur");
    const Role = require("./models/Role");
    const Niveau = require("./models/Niveau");
    const Dossard = require("./models/Dossard");
    const Dispositif = require("./models/Dispositif");
    const Epreuve = require("./models/Epreuve");

    // relation entre les tables
    Role.hasMany(Utilisateur, { as: "Utilisateurs", foreignKey: "utilisateurId" });
    Utilisateur.belongsTo(Role, { as: "Role", foreignKey: "utilisateurId" });
    Niveau.hasMany(Dossard, { as: "Dossards", foreignKey: "dossardId" });
    Dossard.belongsTo(Niveau, { as: "Niveau", foreignKey: "dossardId" });
    Dispositif.hasMany(Epreuve, { as: "Epreuves", foreignKey: "epreuveId" });
    Epreuve.belongsTo(Dispositif, { as: "Dispositif", foreignKey: "epreuveId" });

    // afficher les erreurs
    const errHandler = (err) => {
        console.error("Error : ", err);
    };

    // insère dans les tables
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

    const dispositif = await Dispositif.create({
        label: "PTV",
        numero: 7866
    }).catch(errHandler);

    const epreuve = await Epreuve.create({
        label: "Saut de haie",
        dispositifId: dispositif.id
    }).catch(errHandler);
};