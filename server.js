var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var burgerController = require('./controllers/burgers_controllers');

app.use(express.static('public'));

app.use(bodyParser.json({ type: 'application/*+json' }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/', burgerController);




app.listen(3000, function(){
    console.log("My app is listening.");
})

