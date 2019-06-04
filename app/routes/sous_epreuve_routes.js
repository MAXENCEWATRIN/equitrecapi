//const mariadb = require('mariadb');
const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equitrecapi"
});
let results = [];

module.exports = function (app) {
    //chercher toutes les sous-epreuves d'une épreuve
    app.post('/sousEpreuves/', (rej, res) => {
        con.query('SELECT * from sousEpreuve', function (err, rows, fields) {
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
    //chercher une sous epreuves d'une epreuve l'id en param est celui de l'epreuve
    app.post('/sousEpreuve/:id', (rej, res) => {
        con.query('SELECT * from sousEpreuve where id=', function (err, rows, fields) {
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
