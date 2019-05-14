const mysql = require('mysql');
const bcrypt = require('bcrypt');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equitrec"
});
let results = [];
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = function(app) {
    //deux param pour auth reçu, faire vérif des hash
    app.post('/authentification/:login/:password', (req, res) => {
        var loginHash = req.params.login;
        var passwordhash = req.params.password;
        var i = 0;
        //faire requête qui récupère les données
        con.query('SELECT * from epreuve', function(err, rows, fields) {
            if (!err) {
                rows.forEach(element => {
                    results.push(element);
                    i++;
                });
                if(i = 1){
                bcrypt.compare(passwordhash, results[0], function(err, res) {
                    if (res) {
                        console.log('le mot de passe est correct')
                    } else {
                        // Passwords don't match
                    }

                });


                res.send(results);
            }else
                console.log('Erreur de donnée');
        }else{
                console.log('Error while performing Query.');
            }
        });
    });
};
