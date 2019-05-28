const http = require("http");

http.createServer(function (req,res) {
    // console.log(req.url)
    var GET = {};
    // /?user=123&pass=123123
    if(req.url.indexOf("?") != -1){
        var arr = req.url.split("?")[1]
        // console.log(arr)
        // user=123&pass=123123
        var arr2 = arr.split("&");
        for(var i = 0; i < arr2.length; i++){
            var arr3 = arr2[i].split("=");
            GET[arr3[0]] = arr3[1];
        }
    }else{
        var url = req.url;
    }
    console.log(url,GET)
    res.write("aaaa");
    res.end();
}).listen(8080)
