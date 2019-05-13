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
    app.post('/epreuves', () => {
        con.query('SELECT * from sous_epreuve WHERE idSous_epreuve ='+ id, function(err, rows, fields) {
            if (!err) {
                console.log('The solution is: ', rows);
                result = rows;
            }else
                console.log('Error while performing Query.');
        });
        if(result != ""){

        }else{
            console.log('Error while performing Query.');
        }
    });
};
