const http = require("http");
const fs = require("fs");
const urlLib = require("url");
const querystring = require("querystring");

http.createServer(function (req,res) {

    //get
    var obj = urlLib.parse(req.url,true);
    var url = obj.pathname;
    const GET = obj.query;

    //post
    var str = "";
    req.on("data",function (data) {
        str += data;
    })
    req.on("end",function () {
        const POST = querystring.parse(str);

        //文件请求
        var file_name = "./www"+url;
        fs.readFile(file_name,function (err,data) {
            if(err){
                res.write("404")
            }else{
                res.write(data)
            }
            res.end();
        });
    });



}).listen(8080);
