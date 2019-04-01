window.onload = function(){
    var oUser = document.getElementsByClassName("user_tell")[0];
var oPass = document.getElementsByClassName("user_pass")[0];
var cbx = document.getElementById("cbx");
//获取登录按钮
var oBtn = document.getElementById("btn");
//判断手机号的正则表达式
var tellReg = /^1\d{10}$/;
//判断密码正则表达式
var passReg = /^[a-zA-Z0-9]{6,18}$/;
// //对象
// var obj = {
    
// }
oBtn.onclick = function(){
    var usertell = oUser.value;
    var password = oPass.value;
    console.log(obj)
    if(tellReg.test(usertell) == false || passReg.test(password) == false){
        if(tellReg.test(usertell) == false){
            alert("手机号错误,请重新输入十一位数字")
            oUser.value = "";
            oPass.value = "";
        }else if(passReg.test(password) == false){
            alert("密码错误,请重新输入")
            oPass.value = "";
        }
        
    }else{
        if(cbx.checked){
            setCookie("tell",usertell,setCookieDate(7));
            setCookie("pass",password,setCookieDate(7));
        }else{
            removeCookie("tell")
            removeCookie("pass")
        }
        location.href = "index.html"
    }
}
if(getCookie("tell") && getCookie("pass")){
    oUser.value = getCookie("tell");
    oPass.value = getCookie("pass");
    cbx.checked = true;
}

}