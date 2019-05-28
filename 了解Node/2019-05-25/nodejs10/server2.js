const express=require('express');
const bodyParser = require("body-parser");

var server=express();
server.listen(8080);

// server.use(bodyParser,urlencoded({}));

server.use(bodyParser.urlencoded({ extended: false }))

//GET、POST
server.use('/', function (req, res){
    console.log(req.body); //post
});


