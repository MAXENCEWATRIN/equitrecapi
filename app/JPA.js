const errHandler = (err) => { console.error("Error : ", err); };

/**
 * ROLE
 */
module.exports.creerRole = async (data) => {
    const Role = require("./models/Role");
    await Role.create({
        label: data.label
    }).catch(errHandler);
}
module.exports.afficherRole = async () => {
    const Role = require("./models/Role");
    await Role.findAll().catch(errHandler);
}
/**
 * UTILISATEUR
 */
module.exports.creerUtilisateur = async (data) => {
    const Utilisateur = require("./models/Utilisateur");
    await Utilisateur.create({
        identifiant: data.identifiant,
        motdepasse: data.motDePasse,
        roleId: role.id
    }).catch(errHandler);
}
module.exports.afficherAllUtilisateur = async () => {
    const Utilisateur = require("./models/Utilisateur");
    await Utilisateur.findAll().catch(errHandler);
}
module.exports.connexionUtilisateur = async (identifiant, motDePasse) => {
    const Utilisateur = require("./models/Utilisateur");
    const resultat = await Utilisateur.findAll({
        where: { identifiant: identifiant, motdepasse: motDePasse }
    }).catch(errHandler);
    if (resultat.length > 0) return true;
    else return false;
}



//     const u = await Utilisateur.findAll({
//         where: { identifiant: "maxbis" }
//     }).catch(errHandler);
//     console.log("maxbis user: ", JSON.stringify(u));

// const Utilisateur = require("./models/Utilisateur");
// const Niveau = require("./models/Niveau");
// const Dossard = require("./models/Dossard");
// const Dispositif = require("./models/Dispositif");
// const Epreuve = require("./models/Epreuve");
// const Resultat = require("./models/Resultat");
// const Contrat = require("./models/Contrat");
// const Allure = require("./models/Allure");
// const Style = require("./models/Style");
// const Penalite = require("./models/Penalite");

// Role.hasMany(Utilisateur, { as: "Utilisateurs", foreignKey: "utilisateurId" });
// Utilisateur.belongsTo(Role, { as: "Role", foreignKey: "utilisateurId" });
// Niveau.hasMany(Dossard, { as: "Dossards", foreignKey: "dossardId" });
// Dossard.belongsTo(Niveau, { as: "Niveau", foreignKey: "dossardId" });
// Dispositif.hasMany(Epreuve, { as: "Epreuves", foreignKey: "epreuveId" });
// Epreuve.belongsTo(Dispositif, { as: "Dispositif", foreignKey: "epreuveId" });
// Resultat.hasMany(Contrat, { as: "Contrat", foreignKey: "contratId" });
// Contrat.belongsTo(Resultat, { as: "Resultat", foreignKey: "contratId" });
// Resultat.hasMany(Penalite, { as: "Penalite", foreignKey: "penaliteId" });
// Penalite.belongsTo(Allure, { as: "Allure", foreignKey: "allureId" });
// Allure.belongsTo(Resultat, { as: "Resultat", foreignKey: "allureId" });
// Resultat.hasMany(Style, { as: "Style", foreignKey: "styleId" });
// Style.belongsTo(Resultat, { as: "Resultat", foreignKey: "styleId" });
// Resultat.hasMany(Resultat, { as: "Resultat", foreignKey: "penaliteId" });

// const niveau = await Niveau.create({
//     label: "débutant"
// }).catch(errHandler);

// const dossard = await Dossard.create({
//     numero: 12,
//     niveauId: niveau.id
// }).catch(errHandler);

// const dispositif = await Dispositif.create({
//     label: "PTV",
//     numero: 7866
// }).catch(errHandler);

// const epreuve = await Epreuve.create({
//     label: "Saut de haie",
//     dispositifId: dispositif.id
// }).catch(errHandler);

/**
 *  contrat / style ...
 */
// const resultatContrat = await Resultat.create({
//     score: 12
// }).catch(errHandler);

// const contrat = await Contrat.create({
//     resultatId: resultatContrat.id
// }).catch(errHandler);

// const resultatAllure = await Resultat.create({
//     score: 15
// }).catch(errHandler);

// const allure = await Allure.create({
//     resultatId: resultatAllure.id
// }).catch(errHandler);

// const resultatStyle = await Resultat.create({
//     score: 25
// }).catch(errHandler);

// const style = await Style.create({
//     resultatId: resultatStyle.id
// }).catch(errHandler);

// const resultatPenalite = await Resultat.create({
//     score: -7
// }).catch(errHandler);

// const penalite = await Penalite.create({
//     resultatId: resultatPenalite.id
// }).catch(errHandler);