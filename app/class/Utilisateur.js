const JPA = require("../JPA");

module.exports = class Utilisateur {

    constructor(identifiant, motDePasse) {
        this._identifiant = identifiant;
        this._motDePasse = motDePasse;
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

    creerUtilisateur(utilisateur, role) {
        return JPA.creerUtilisateur(utilisateur, role);
    };

    connexionUtilisateur(){

    };


}