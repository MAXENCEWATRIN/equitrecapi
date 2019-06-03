const bootstrap = require("../bootstrap");

module.exports = class Utilisateur {

    constructor(identifiant, motDePasse) {
        this._identifiant = identifiant;
        this._motDePasse = motDePasse;
        console.log("created")
    }

    get identifiant() {
        return this._identifiant;
    }

    set identifiant(identifiant) {
        this._identifiant = identifiant;
    }

    get motDePasse() {
        return this._motDePasse;
    }

    set motDePasse(motDePasse) {
        this._motDePasse = motDePasse;
    }

    creerUtilisateur(utilisateur) {
        return bootstrap.utilisateurDo(utilisateur);
    };
}