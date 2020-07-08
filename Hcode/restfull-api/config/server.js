let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

let app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(expressValidator())
    
consign()
    .include('app/routes')
    .then('app/models')
    .then('config/dbConnection.js')
    .then('utils')
    .into(app)

module.exports = app