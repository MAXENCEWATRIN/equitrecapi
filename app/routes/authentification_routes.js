const mysql = require('mysql2');
const JPA = require("../JPA");

/** class **/
var Utilisateur = require("../class/Utilisateur");
/** erreur **/
const errHandler = (err) => {
    console.error("Error : ", err);
}
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equitrecapi"
});

module.exports = function (app) {

    //deux param pour auth reçu, faire vérif des hash
    app.get('/authentification/inscription/:identifiant/:motdepasse', (req, res) => {
        var identifiant = req.params.identifiant;
        var motDePasse = req.params.motdepasse;

        var utilisateur = new Utilisateur(identifiant, motDePasse);
        utilisateur.creerUtilisateur(utilisateur);
        res.status(200).json({ 'response': { 'type': 'true', 'message': 'Profil créé' } });
    });
    app.post('/authentification/connexion/:identifiant/:motdepasse', (req, res) => {
        var identifiant = req.params.identifiant;
        var motDePasse = req.params.motdepasse;


        var utilisateur = new Utilisateur(identifiant, motDePasse);
        utilisateur.connexionUtilisateur(utilisateur);

        if (res.status != 200) {
            res.status(200).json({ 'response': { 'type': 'true', 'message': 'Utilisateur identifié' } });
        }
        res.status(500).json({ 'response': { 'type': 'false', 'message': 'Erreur' } });
    });
    app.post('/afficherallutilisateur', (req, res) => {
        return JPA.afficherUtilisateur();
    });
};

/** NOUVELLE VERSION AVEC ORM (En construction) **/
