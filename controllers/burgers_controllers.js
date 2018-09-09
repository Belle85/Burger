var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();





router.get("/", function(req, res){
    res.send("index.html");
})

router.get("/all", function(req, res){
    res.send("This is going to send all the burgers that are not devoured");
});

router.post("/addBurger", function(req, res) {
    // console.log("This is my request: " + req);
    console.log(req.body);

});




module.exports = router;