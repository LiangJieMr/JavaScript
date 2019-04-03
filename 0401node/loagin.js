var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(function(request,response){
    //设置跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应的字符编码
    response.writeHead(200,{"Content-type":"text/html:charset=UTF-8"});
    var info =null;
    var strData = "";
    request.on("data",function(data){
        strData += data;
    });
    request.on("end",function(){
        //获取前台
        strData = querystring.parse(strData);
        //注册的
        fs.readFile("register.json","utf8",function(error,data){
            var userDate = JSON.parse(data);
            if(strData.name == userDate.name && strData.pass == userDate.pass){
                info = {"code":0,"message" : "success","token" : "asdzxcqwe"};
                response.write(JSON.stringify(info,null,4));
            }else{
                info = {"code":1,"message" : "error","token" : "asdzxcqwe"};
                response.write(JSON.stringify(info,null,4));
            }
            response.end();
        })
    })
}).listen(8021);