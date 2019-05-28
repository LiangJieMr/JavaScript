const http = require("http");

var server = http.createServer(function (request,response) {
    console.log("有人来了")
    response.end();
});

server.listen(8080);