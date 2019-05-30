const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes')(app, {});
const port = 8000;
app.listen(port, () => {
    console.log('Vinzou ça ecoute par ici ' + port);
});

//DB connection
require("./app/database/connection");

require("./app/bootstrap")();