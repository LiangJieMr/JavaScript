const express = require("express");
const expressStatic = require("express-static");

var server = express();

server.listen(8080);

var users = {
    "zhangsan" : "123456",
    "lisi" : "654321"
}

server.get('/login',function (req,res) {
    var user = req.query['user'];
    var pass = req.query['pass'];
    if(users[user] == null){
        res.send({"ok":false,"msg":"用户名为空"})
    }else if(users[user] != pass){
        res.send({"ok":false,"msg":"用户名或密码错误"})
    }else{
        res.send({"ok":true,"msg":"登陆成功"})
    }
    res.end()
})


server.use(expressStatic('./www'));