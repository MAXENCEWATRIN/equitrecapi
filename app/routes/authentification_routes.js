/** erreur **/
const errHandler = (err) => {
    console.error("Error : ", err);
};
module.exports = function (app, db) {
    //deux param pour auth reçu, faire vérif des hash
    app.post('/authentification/inscription/:identifiant/:motdepasse/:role', (req, res) => {
        var identifiant = req.params.identifiant;
        var motDePasse = req.params.motdepasse;
        var role = req.params.role;

        db.Utilisateur.findAll({where: { identifiant: identifiant, motdepasse: motDePasse }})
            .then( (result) => {
                if(result.length > 0){
                    res.json({ 'response': { 'type': 'false', 'message': 'utilisateur existant'} });
                    console.log(res);
                }else{
                    db.Utilisateur.create({
                        identifiant: identifiant,
                        motdepasse: motDePasse,
                        roleId: role,
                    }).then(res.json({'response': { 'type': 'true', 'message': 'Utilisateur créé' }}))
                        .catch(errHandler);
                }}).catch(errHandler);
    });

    app.post('/authentification/connexion/:identifiant/:motdepasse', (req, res) => {
        var identifiant = req.params.identifiant;
        var motDePasse = req.params.motdepasse;

        db.Utilisateur.findAll({where: { identifiant: identifiant, motdepasse: motDePasse }})
            .then( (result) => {
                if(result.length > 0){
                    res.json({ 'response': { 'type': 'true', 'message': 'utilisateur existant, connexion approuvée'} });
                    console.log(res);
                }}).catch(errHandler);

    });
    app.get('/afficherallutilisateurs', (req, res) => {
        db.Utilisateur.findAll()
            .then( (result) => {
                if(result.length > 0){
                    res.json({ 'response': { 'type': 'true', 'message': 'utilisateur existant, connexion approuvée'} });
                    console.log(res);
                }else{
                    res.json({ 'response': { 'type': 'false', 'message': 'Aucun utilisateur'} });
                }}).catch(errHandler);
    });
};


