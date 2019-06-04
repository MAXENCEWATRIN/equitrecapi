const JPA = require("../JPA");

module.exports = class Role {

    constructor(label) {
        this._label = label;
    }

    get label() {
        return this._label;
    }

    set label(label) {
        this._label = label;
    }

    creerRole(role) {
        return JPA.creerRole(role);
    };
}