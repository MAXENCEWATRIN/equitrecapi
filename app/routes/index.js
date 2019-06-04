const epreuve_routes = require('./epreuve_routes');
const sousEpreuve_routes = require('./sous_epreuve_routes');
const authentification_routes = require('./authentification_routes');
const role_routes = require('./role_routes');
module.exports = function (app, db) {
    epreuve_routes(app, db);
    sousEpreuve_routes(app, db);
    authentification_routes(app, db);
    role_routes(app, db);
};

