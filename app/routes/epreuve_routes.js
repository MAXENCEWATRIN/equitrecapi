//const mariadb = require('mariadb');

const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "equitrec"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = function(app) {
    let result;
    app.post('/epreuves', (rej, res) => {
        con.query('SELECT * from epreuve', function(err, rows, fields) {
            if (!err) {
                console.log('The solution is: ', rows);
                rows.forEach(element => {
                    res.send(element);
////////////////////////////////////////////
                })
            }else
                console.log('Error while performing Query.');
        });




    });

};
