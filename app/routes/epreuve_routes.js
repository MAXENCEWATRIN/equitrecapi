//const mariadb = require('mariadb');

const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equitrec"
});
let results = [];


module.exports = function (app) {
    //liste des epreuves
    app.post('/epreuves', (rej, res) => {
        con.query('SELECT * from epreuves', function (err, rows, fields) {
            if (!err) {
                console.log('query success : ', rows);
                rows.forEach(element => {
                        results.push(element);
                    },
                );
                res.status(200).json(results);

            } else
                console.log('Error while performing Query.');
        });
    });
    //liste des epreuves
    app.get('/epreuves', (rej, res) => {
        var results = "C'est un succès";
        res.send(results);

        console.log("C'est un succès");
    });
    //requete d'une epreuve
    app.post('/epreuve/:id', (rej, res) => {
        con.query('SELECT * from epreuve', function (err, rows, fields) {
            if (!err) {
                console.log('query success : ', rows);
                rows.forEach(element => {
                        results.push(element);

                    },
                );
                res.send(results);
            } else
                console.log('Error while performing Query.');
        });
    });
};
