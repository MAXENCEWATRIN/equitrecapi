const mysql = require('mysql2');
const JPA = require("../JPA");

/** class **/
var Role = require("../class/Role");
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
    app.post('/creerrole/:label', (req, res) => {
        var label = req.params.label;
        var role = new Role(label);
        role.creerRole(role);
    });
    app.post('/afficherallrole', (req, res) => {
        return JPA.afficherRole()
    });
}