const mysql = require('mysql2');
const JPA = require("../JPA");

/** class **/
var Utilisateur = require("../class/Utilisateur");
/** erreur **/

module.exports = function (app) {

    //deux param pour auth reçu, faire vérif des hash
    app.get('/authentification/inscription/:identifiant/:motdepasse/:role', (req, res) => {
        var identifiant = req.params.identifiant;
        var motDePasse = req.params.motdepasse;
        var role = req.params.role;
        var utilisateur = new Utilisateur(identifiant, motDePasse);
        utilisateur.creerUtilisateur(utilisateur, role);
        res.status(200).json({ 'response': { 'type': 'true', 'message': 'Profil créé' } });

        res.send();
        console.log(res);
    });
    app.post('/authentification/connexion/:identifiant/:motdepasse', (req, res) => {
        var identifiant = req.params.identifiant;
        var motDePasse = req.params.motdepasse;
        return JPA.connexionUtilisateur(identifiant, motDePasse);

        // if (res.status !== 200) {
        //     res.status(200).json({ 'response': { 'type': 'true', 'message': 'Utilisateur identifié' } });
        // }
        // res.status(500).json({ 'response': { 'type': 'false', 'message': 'Erreur' } });
    });
    app.post('/afficherallutilisateur', (req, res) => {
        return JPA.afficherAllUtilisateur();
    });
};

/** NOUVELLE VERSION AVEC ORM (En construction) **/
