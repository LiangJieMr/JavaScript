const http = require("http");
const querystring = require("querystring");

http.createServer(function (req,res) {
    var str = ""; //接收数据
    //post - req
    //data 分段发送一段一次（很多次）
    var num = 0;
    req.on("data",function (data) {
        console.log("第"+(num++)+"次收到数据")
        str+=data;
    })
    //end 数据全部到达（一次）
    req.on("end",function(){
        var POST = querystring.parse(str);
        console.log(POST)
    })

}).listen(8080);