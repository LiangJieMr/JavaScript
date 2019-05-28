const express = require("express");

var server = express();

/*server.get('/',function (req,res) {
    console.log("有GET");
});

server.post('/',function (req,res) {
    console.log("有POST");
});*/

server.use('/',function (req,res) {
    console.log(req.query);
})

server.listen(8080);