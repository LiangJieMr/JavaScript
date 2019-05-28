const urlLib = require("url");

var str = urlLib.parse("http://www.shendu.com/index?a=jack&b=100",true);
console.log(str,str.query)
