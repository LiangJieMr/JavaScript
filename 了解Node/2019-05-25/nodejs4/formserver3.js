const http = require("http");
const urlLib = require("nodejs4/url");
http.createServer(function (req,res) {
    var GET = {};
    var obj = urlLib.parse(req.url,true);
    GET = obj.query;
    console.log(GET)
    res.write("aaaa");
    res.end();
}).listen(8080)
