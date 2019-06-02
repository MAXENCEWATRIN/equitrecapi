import {utilisateurDo} from "../bootstrap"

class Utilisateur{

    constructor(identifiant, motDePasse) {
        this.identifiant = identifiant;
        this.motDePasse = motDePasse;
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

    creerUtilisateur = function (utilisateur) {
        return utilisateurDo(utilisateur);
    };
}