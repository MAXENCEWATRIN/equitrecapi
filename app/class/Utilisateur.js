const bootstrap = require("../bootstrap");

module.exports = class Utilisateur {

    constructor(identifiant, motDePasse) {
        this.identifiant = identifiant;
        this.motDePasse = motDePasse;
        console.log("created")
    }

    get identifiant() {
        return this.identifiant;
    }

    set identifiant(identifiant) {
        this.identifiant = identifiant;
    }

    get motDePasse() {
        return this.motDePasse;
    }

    set motDePasse(motDePasse) {
        this.motDePasse = motDePasse;
    }

    creerUtilisateur(utilisateur) {
        return bootstrap.utilisateurDo(utilisateur);
    };
}