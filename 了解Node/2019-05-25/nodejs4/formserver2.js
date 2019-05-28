const http = require("http");
const querystring = require("nodejs4/querystring");
http.createServer(function (req,res) {
    var GET = {};
    if(req.url.indexOf("?") != -1){
        var arr = req.url.split("?")[1]
        GET = querystring.parse(arr);
    }else{
        var url = req.url;
    }
    console.log(url,GET)
    res.write("aaaa");
    res.end();
}).listen(8080)
