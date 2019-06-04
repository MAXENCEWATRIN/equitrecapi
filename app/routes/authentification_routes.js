const mysql = require('mysql2');

/** Insertion des models**/
//const Utilisateur = require("../models/Utilisateur");

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
    database: "equitrec"
});
let results = [];

module.exports = function (app) {
    app.post('/authentification/signin/:login/:password', (req, res) => {
        var login = req.params.login;
        var passwordhash = req.params.password;
        //verification user existant
        con.query("SELECT identifiant from utilisateurs where identifiant='" + login + "'", function (err, rows, fields) {
            if (!err && rows.length > 0) {
                res.send("{'response':{'type':'false', 'message':'Identifiant déjà utilisé'}}");
            } else {
                con.query("INSERT INTO utilisateurs (identifiant, motdepasse)" +
                    "VALUES ('" + login + "', '" + passwordhash + "');", function (err, rows, fields) {
                        if (!err) {
                            res.send("{'response':{'type':'true', 'message':'Profil créé'}}");
                        } else {
                            res.send("{'response':{'type':'false', 'message':'Erreur lors de la création du profil'}}");
                            console.log('Error while performing Query INSERT user.');
                        }
                    });
            }
        });
    });
    //deux param pour auth reçu, faire vérif des hash
    app.post('/authentification/:login/:password', (req, res) => {
        var identifiant = req.params.login;
        var motdepasseHashed = req.params.password;
        console.log("identifiant: " + identifiant);
        console.log("mot de passe: " + motdepasseHashed);
        //var identifiant = "monsuperprogramme";
        //var motdepasseHashed = "cestlemeoilleur";

        var utilisateur = new Utilisateur(identifiant, motdepasseHashed);
        utilisateur.creerUtilisateur(utilisateur);
        // var i = 0;
        //faire requête qui récupère les données en fonction du identifiant non hashé


    });
    app.post('/authentification/signin/:login/:password', (req, res) => {
        var login = req.params.login;
        var passwordhash = req.params.password;
        //verification user existant
        con.query("SELECT identifiant from utilisateurs where identifiant='" + login + "'", function (err, rows, fields) {
            if (!err && rows.length > 0) {
                res.send("{'response':{'type':'false', 'message':'Identifiant déjà utilisé'}}");
            } else {
                con.query("INSERT INTO utilisateurs (identifiant, motdepasse)" +
                    "VALUES ('" + login + "', '" + passwordhash + "');", function (err, rows, fields) {
                        if (!err) {
                            res.send("{'response':{'type':'true', 'message':'Profil créé'}}");
                        } else {
                            res.send("{'response':{'type':'false', 'message':'Erreur lors de la création du profil'}}");
                            console.log('Error while performing Query INSERT user.');
                        }
                    });
            }
        });
    });
    // //deux param pour auth reçu, faire vérif des hash
    // app.post('/authentification/:login/:password', (req, res) => {
    //     var identifiant = req.params.login;
    //     var motdepasseHashed = req.params.password;
    //     var i = 0;
    //     //faire requête qui récupère les données en fonction du identifiant non hashé
    //     con.query("SELECT motdepasse from authentification where identifiant='" + identifiant + "'", function (err, rows, fields) {
    //         if (!err) {
    //             rows.forEach(element => {
    //                 results.push(element);
    //                 i++;
    //                 console.log(i);
    //             });
    //             if (i === 1) {
    //                 if (results[0].password === motdepasseHashed) {
    //                     res.send("{'response':{'type':'true', 'message':'Profil connecté}}");
    //                 } else res.send(false);
    //             } else {
    //                 res.send("{'response':{'type':'false', 'message':'Erreur de donnée'}}");
    //             }
    //
    //         } else {
    //             res.send('Error while performing Query.');
    //             console.log('Error while performing Query.');
    //         }
    //     });
    // });
};

/** NOUVELLE VERSION AVEC ORM (En construction) **/
