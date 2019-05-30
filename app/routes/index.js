const epreuveRoutes = require('./epreuve_routes');
const sousEpreuve_routes = require('./sous_epreuve_routes');
const authentification = require('./authentification_routes');
module.exports = function (app, db) {
    epreuveRoutes(app, db);
    sousEpreuve_routes(app, db);
    authentification(app, db);
};

