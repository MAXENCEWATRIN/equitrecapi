const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equitrec"
});
let results = [];

module.exports = function (app) {
    //deux param pour auth reçu, faire vérif des hash
    app.post('/authentification/:login/:password', (req, res) => {
        var login = req.params.login;
        var passwordhash = req.params.password;
        var i = 0;
        //faire requête qui récupère les données en fonction du login non hashé
        con.query("SELECT password from authentification where login='" + login + "'", function (err, rows, fields) {
            if (!err) {
                rows.forEach(element => {
                    results.push(element);
                    i++;
                    console.log(i);
                });
                if (i === 1) {
                    if (results[0].password === passwordhash) {
                        res.send("{'response':{'type':'true', 'message':'Profil connecté}}");
                    } else res.send(false);
                } else {
                    res.send("{'response':{'type':'false', 'message':'Erreur de donnée'}}");
                }

            } else {
                res.send('Error while performing Query.');
                console.log('Error while performing Query.');
            }
        });
    });
};
//insertion en base d'un nouvel user
module.exports = function (app) {
    app.post('/authentification/signin/:login/:password', (req, res) => {
        var login = req.params.login;
        var passwordhash = req.params.password;
        //verification user existant
        con.query("SELECT login from authentification where login='" + login + "'", function (err, rows, fields) {
            if (!err && rows.length > 0) {
                res.send("{'response':{'type':'false', 'message':'Identifiant déjà utilisé'}}");
            } else {
                con.query("INSERT INTO authentification (login, password)" +
                    "VALUES ('"+login+"', '"+passwordhash+"');", function (err, rows, fields) {
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
};

