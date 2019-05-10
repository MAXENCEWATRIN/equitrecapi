const express        = require('express');
const mariadb        = require('mariadb');
const bodyParser     = require('body-parser');
const app            = express();

//Database connection
const pool = mariadb.createPool({
    host: 'mydb.com',
    user:'myUser',
    password: 'myPassword',
    connectionLimit: 5
});

require('./app/routes')(app, {});
const port = 8000;
app.listen(port, () => {
    console.log('Vinzou ça ecoute par ici ' + port);
});