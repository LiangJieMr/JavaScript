//引入http模块
var http = require("http");
//引入request模块
var request = require("request");

//创建主机名
var hostName = "127.0.0.1";
//创建端口号
var port = 8888;

//创建代理服务器
var apiServer = http.createServer(function(req,res){
    var url = "http://api.zhuishushenqi.com/cats/lv2/statistics";
    var options = {
        url : url
    };
    request.get(options,function(error,response,body){
        if(!error && response.statusCode == 200){
            //设置编码类型,否则中文会显示为乱码、
            res.setHeader('Content-type','text/plain;charset=UTF-8');
            //设置所有域允许跨域
            res.setHeader('Access-Control-Allow-Origin','*');
            console.log(body);
            //返回代理后内容
            res.end(body);
        }
    })
});

apiServer.listen(port,hostName,function(error){
    if(!error){
        console.log("接口代理运行在 http://" + hostName + ":" + port);
    }
})