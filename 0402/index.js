var http = require("http");
var querystring = require("querystring");
http.createServer(function(request,response){
     //设置跨域
     response.setHeader("Access-Control-Allow-Origin","*");
     //设置响应的字符编码
     response.writeHead(200,{"Content-type":"text/html:charset=UTF-8"});
     var strData = "";
     request.on("data",function(data){
         strData += data;
     });
     request.on("end",function(){
        strData = querystring.parse(strData);
        console.log(strData)
    })
}).listen(8000);