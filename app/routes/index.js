const epreuveRoutes = require('./epreuve_routes');
const epreuve_routes = require('./sous_epreuve_routes');
module.exports = function(app, db) {
    epreuveRoutes(app, db);
    epreuve_routes(app, db);
};