const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const epreuve_routes = require('./app/routes/epreuve_routes');
const authentification_routes = require('./app/routes/authentification_routes');
const role_routes = require('./app/routes/authentification_routes');
const db = require("./app/models/Utilisateur");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

require('./app/routes')(app, {});
const port = 8003;
app.listen(port, () => {
    console.log('Vinzou ça ecoute par ici ' + port);
});

module.exports = function (app, db) {
    epreuve_routes(app, db);
    authentification_routes(app, db);
    role_routes(app, db);
};

//DB connection
require("./app/database/connection");

