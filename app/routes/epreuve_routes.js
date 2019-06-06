/** erreur **/
const errHandler = (err) => {
    console.error("Error : ", err);
};
module.exports = function (app, db) {
    //liste des epreuves
    app.get('/epreuves', (rej, res) => {
        db.Epreuve.findAll()
            .then( (result) => {
                if(result.length > 0){
                    res.json(result);
                    console.log(res);
                }else{
                    res.json({ 'response': { 'type': 'false', 'message': 'Aucune epreuve'} });
                }}).catch(errHandler);
    });

    //requete d'une epreuve
    app.post('/epreuves/:id', (rej, res) => {
        con.query('SELECT * from epreuves', function (err, rows, fields) {
            if (!err) {
                console.log('query success : ', rows);
                rows.forEach(element => {
                    results.push(element);

                },
                );
                res.send(results);
            } else
                console.log('Error while performing Query.');
        });
    });
};
