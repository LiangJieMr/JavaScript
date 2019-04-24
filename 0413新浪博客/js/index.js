//获取可视区域的宽度和高度
var view = {
    //获取可视区域的宽度
    getPortWidth : function () {
        return document.documentElement.clientWidth || document.body.clientWidth;
    },
    //获取可视区域的高度
    getPortHeight : function () {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
};
var mask = document.getElementById("mask");
//获取滚动条滚动的距离
var scroll = {
    getTop : function () {
        return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    },
    getLeft : function () {
        return document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;

    },
    getHeight : function(){
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    },
    getWidth : function(){
        return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
    },
    setTop :function (value) {
        if(document.documentElement.scrollTop){
            document.documentElement.scrollTop = value;
        }else if(window.pageYOffset){
            window.pageYOffset = value;
        }else if(document.body.scrollTop){
            document.body.scrollTop = value;
        }
    },
    setLeft : function (value) {
        if(document.documentElement.scrollLeft){
            document.documentElement.scrollLeft = value;
        }else if(window.pageXOffset){
            window.pageXOffset = value;
        }else if(document.body.scrollLeft){
            document.body.scrollLeft = value;
        }
    }
};
var bgArr = ["img/p5.jpg","img/p6.jpg","img/p7.jpg","img/p8.jpg","img/p9.jpg","img/p10.jpg","img/p11.jpg","img/p12.jpg"]
var bom_img = document.getElementById("bom_img");
var foonter = document.getElementById("footer");
var count = 20;
var num = 10;
window.onscroll = function () {
    if(num <= count){
        if(scroll.getTop() + view.getPortHeight() >= scroll.getHeight()){
            // alert("延迟加载")
            num = num +10;
            for(var i = 0;i<4;i++){
                var li = document.createElement("li");
                var img = document.createElement("img");
                var span = document.createElement("span");
                var clo = document.getElementById("clo");
                clo.onclick = function(){
                    yujiazai.style.display = "none";
                }
                img.src = bgArr[i];
                span.innerHTML = "延迟加载图片"
                bom_img.appendChild(li);
                li.appendChild(img);
                li.appendChild(span);
                // li.innerText = "延迟加载图片"

                (function(){
                    // 预加载
var yubg = ["img/p1big.jpg","img/p2big.jpg","img/p3big.jpg","img/p4big.jpg","img/p5big.jpg","img/p6big.jpg","img/p7big.jpg","img/p8big.jpg","img/p9big.jpg","img/p10big.jpg","img/p11big.jpg","img/p12big.jpg",]
var yujiazai = document.getElementById("yujiazai");
var tu = document.getElementById("tu");
var bom_img = document.getElementById("bom_img");
var gimg = bom_img.getElementsByTagName("img");
var next = document.getElementById("next");
var nnum = document.getElementById("nnum");
var aa = null;
var clo = document.getElementById("clo");
clo.onclick = function(){
    yujiazai.style.display = "none";
    mask.style.display = "none";
}
for(var i = 0; i < gimg.length; i++){
gimg[i].index = i;
aa = gimg[i].index;
gimg[i].onclick = function(){
    yujiazai.style.display = "block";
    mask.style.display = "block";
    tu.src = yubg[this.index];
    nnum.innerHTML = this.index+1;
    }
}
// var ee = null;
next.onclick = function(){
    // ee = ee+aa+1;
    nnum.innerHTML = aa;
    aa++;
    if(aa > 12){
        aa = 1;
    }
    
    tu.src = "img/p"+aa+"big.jpg";
}
                })()
                
            }
            bgArr.splice(0,4);
            console.log(bgArr)
            

            
        }
    }else{
        foonter.style.display = "block";
    }

}
 //阻止事件冒泡的方法,兼容ie和高版本浏览器
 function stopPro(evt){
    var e = evt || window.event;
    window.event ? e.cancelBubble = true : e.stopPropagation();
}

//弹出个人中心下列表
var geRen = document.getElementsByClassName("geRen")[0];
var oList = document.getElementById("list");
var arrow = document.getElementsByClassName("arrow")[0];
var fabu = document.getElementById("fabu")
var aTan = document.getElementsByClassName("tanKuang")[0];
geRen.onclick = function(){
    oList.style.display = "block";
    arrow.src = "img/arrow2.png";
    stopPro(event);
}
document.onclick = function(){
    oList.style.display = "none";
    arrow.src = "img/arrow.png";
}
//发文
fabu.onclick = function(){
    aTan.style.display = "block";
    mask.style.display = "block";
    //禁止滚动条
    document.documentElement.style.overflowY = 'hidden'; 
}


//补零函数
function zero(n){
    if(n < 10){
        return "0" + n;
    }else{
        return "" + n;
    }
}
//定义一个正则  空白
var aInpn = document.getElementById("inp");
var aClose = document.getElementById("close");
var faWen_right = document.getElementById("faWen_right");
var aTexx = document.getElementById("inp1");
var aBut = document.getElementsByTagName("button")[0];
var aXing = document.getElementsByClassName("Xing")[0];
var aXing1 = document.getElementsByClassName("Xing")[1];
var faWen1_tit = document.getElementsByClassName("faWen1-tit")[0];
var faWen1_time = document.getElementsByClassName("faWen1-time")[0];
var regg = /./;
aBut.onclick = function(){
    if(regg.test(aInpn.value) && regg.test(aTexx.value)){
        // aTan.style.display = "none";
         //获取输入的内容
        var faWen_list = document.createElement("div");
        var first = document.getElementsByClassName("faWen_list")[0];
        var faWen1 = document.createElement("h5");
        var faWen1_tit = document.createElement("div");
        var faWen_right = document.getElementById("faWen_right");
        var faWen1_time = document.createElement("div");
        var faWen1_content = document.createElement("p");
        faWen_list.className = "faWen_list";
        faWen1.className = "faWen1";
        faWen1_tit.className="faWen1_tit";
        faWen1_time.className="faWen1_time";
        faWen1_content.className = "faWen1_content";
        faWen1_tit.innerHTML = aInpn.value;
        faWen1_content.innerHTML = aTexx.value;

        //获取当前时间
        //创建一个时间对象
        var aDate = new Date();
        //获取当前年份
        var year = aDate.getFullYear();
        // console.log(year)
        //获取当前月份
        var month = aDate.getMonth();
        // console.log(month)
        //获取当前日期
        var date = aDate.getDate();
        // console.log(date)
        //获取当前时间
        var hours = aDate.getHours();
        // console.log(hours)
        //获取当前分钟
        var minutes = aDate.getMinutes();
        // console.log()
        //获取当前秒数
        var seconds = aDate.getSeconds();
        // console.log(seconds)
        faWen1_time.innerHTML = zero(year)+"-"+zero(month+1)+"-"+zero(date)+" "+zero(hours)+":"+zero(minutes)+":"+zero(seconds);
        // faWen_right.appendChild(faWen_list)
        faWen_right.insertBefore(faWen_list,faWen_right.childNodes[0]);
        faWen_list.appendChild(faWen1);
        faWen_list.appendChild(faWen1_content)
        faWen1.appendChild(faWen1_tit);
        faWen1.appendChild(faWen1_time);
        aInpn.value="";
        aTexx.value="";
        mask.style.display = "none";
        aTan.style.display = "none";
        document.documentElement.style.overflowY = 'scroll'; 
    }else{
        aTan.style.display = "block";
        aXing.style.color = "red";
        aXing1.style.color = "red";
    }
}
aClose.onclick = function(){
    aTan.style.display = "none";
    mask.style.display = "none";
    document.documentElement.style.overflowY = 'scroll'; 
}

// con_list样式
var con_list = document.getElementById("con_list");
var oLi = con_list.getElementsByTagName("li");
for(var i = 0; i < oLi.length; i++){
    oLi[i].onmouseover = function(){
        for(var i = 0; i < oLi.length; i++){
            oLi[i].id = "";
        }
        this.id = "active";
    }
}


//轮播图
//获取元素
var aCarousel = document.getElementById("carousel");
var aCircles = document.getElementById("circles");
var aLi = aCircles.getElementsByTagName("li");
var aImagesList = document.getElementById("imagesList");
var aImgLi = aImagesList.getElementsByTagName("li");
var aBtn = document.getElementById("carousel_leftBtn");
var aBtn1 = document.getElementById("carousel_rightBtn");
//初始化一个变量保存下标值
var index = 0;
//设置一个保存定时器的变量
var timer = null;
//设置小圆点点击事件
for(var i = 0; i < aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        tab(this.index);
    }
}
//设置按钮点击事件
//左按钮
aBtn.onclick = function(){
    index--;
    if(index < 0){
        index = 2;
    }
    tab(index);
}
//右按钮
aBtn1.onclick = function(){
    index++;
    if(index > 2){
        index = 0;
    }
    tab(index);
}
//封装变化的图片原点
function tab(index){
    for(var i = 0; i < aLi.length; i++){
            aLi[i].className = "";
            aImgLi[i].className = "";
        }
        aLi[index].className = "current";
        aImgLi[index].className = "current";
}

//设置一个定时器
//封装定时器
function move(){
    index++;
    if(index > 2){
         index = 0;
    }
    tab(index);
}
timer = setInterval(move,1000);
        
//关闭定时器
aCarousel.onmouseover = function(){
    clearInterval(timer);
}
//开启定时器
aCarousel.onmouseout = function(){
    timer = setInterval(move,1000);
}


//创建cookie,保存到浏览器
function setCookie(name,value,expires,path,domain,secure) {
    //用一个变量保存设置的键值对,并且进行编码
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    //设置过期时间
    if(expires instanceof Date){
        cookieText += ";expires=" + expires;
    }
    //设置访问的路径
    if(path){
        cookieText += ";path=" + path;
    }
    //设置访问的域名
    if(domain){
        cookieText += ";domain=" + domain;
    }
    //设置访问的协议
    if(secure){
        cookieText += ";secure"
    }
    //写入cookie
    document.cookie = cookieText;
}

//获取cookie
function getCookie(name) {
    //userName=
    var cookieName = encodeURIComponent(name) + '=';
    //返回属性名的索引
    var cookieStart = document.cookie.indexOf(cookieName);
    //创建一个变量,用来保存cookie的值
    var cookieValue = null;
    //根据属性名查找cookie,如果大于0,那么这条cookie则存在,如果小于,则表示不存在
    if(cookieStart >= 0){
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if(cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}

//设置过期时间
function setCookieDate(day){
    if(typeof day == "number" && day > 0){
        var date = new Date();
        date.setDate(date.getDate() + day);
    }else{
        throw new Error('传递的day必须是一个天数，必须比0大');
    }
    return date;
}

//删除cookie
function deleteCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
deleteCookie("name")

//换肤
var closee = document.getElementById("closee");
var skin = document.getElementById("skin");
var content = document.getElementById("content");
var imgLi = skin.getElementsByTagName("li");
var tSkin = document.getElementById("tskin");
console.log(tSkin)
var BgArr = ["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg"]
var BgColor = ["rgb(231, 233, 232)","rgb(236, 240, 252)","rgb(226, 226, 226)","rgb(255, 255, 255)","rgb(243, 243, 243)","rgb(235, 222, 190)"]
closee.onclick = function(){
    skin.style.display = "none";
    mask.style.display = "none";
}
for(var i=0;i<imgLi.length;i++){
    imgLi[i].index = i;
    imgLi[i].onclick = function (){
        content.style.background = BgColor[this.index]+ "url('"+ BgArr[this.index] +"') repeat-x";
        //设置cookie
        setCookie("bigBg",BgArr[this.index],setCookieDate(7));
        setCookie("bigColor",BgColor[this.index],setCookieDate(7));
    }
}
console.log(getCookie("bigBg"),getCookie("bigColor"))
if(getCookie("bigBg") && getCookie("bigColor")){
    content.style.background =  getCookie("bigColor")+ "url('"+ getCookie("bigBg") +"') repeat-x";
}

tSkin.onclick = function(){
    skin.style.display = "block";
    mask.style.display = "block";
};


// 登陆
var regname = "";
var regpass = "";
var loagin = document.getElementById("loagin");
var closeee = document.getElementById("closeee");
var dl = document.getElementsByClassName("dl")[0];
var loagin_btn = document.getElementById("loagin_btn");
dl.onclick = function(){
    loagin.style.display = "block";
    mask.style.display = "block";
}
closeee.onclick = function(){
    loagin.style.display = "none";
    mask.style.display = "none";
}
var username1 = document.getElementById("username1");
var userpass1 = document.getElementById("userpass1");
loagin_btn.onclick = function(){
    if(username1.value == regname && userpass1.value == regpass){
        alert("登陆成功！！")
        loagin.style.display = "none";
        mask.style.display = "none";
    }else{
        alert("去注册账号或再次输入");
        console.log(username1.value)
        console.log(userpass1.value)
    }
}

//注册
var zhuce = document.getElementsByClassName("zhuce")[0];
var registered = document.getElementById("registered");
zhuce.onclick = function(){
    registered.style.display = "block";
    mask.style.display = "block";
}




//备注内容字数
var tex = document.getElementById("tex");
var zishu = document.getElementsByClassName("zishu")[0];
var str = document.getElementsByClassName("str")[0];
var vae = "";
var valen = "";
var text = 200;
tex.onkeyup = function(){
    vae = tex.value.split("");
    valen = vae.length;
    zishu.innerHTML = text-valen;
    if(zishu.innerHTML < 0){
        str.style.color = "red";
        str.innerHTML = "字数超出范围,清除";
    }
}
var zuv = "";
str.onclick = function(){
    if(str.innerHTML == "字数超出范围,清除"){
        zuv = tex.value.split("");
        zuv.splice(199,zuv.length-200);
        var a = zuv.join("");
        tex.value = a;
        str.style.color = "#333";
        str.innerHTML = "还可以输入0字"
    }
}

var closeee2 = document.getElementById("closeee2");
var reg = document.getElementById("reg");
var username = document.getElementById("username");
var userpass = document.getElementById("userpass");
var userpass2 = document.getElementById("userpass2");
var huida = document.getElementById("huida");
var youjian = document.getElementById("youjian");
var bir = document.getElementById("bir");
closeee2.onclick = function(){
    registered.style.display = "none";
    mask.style.display = "none";
}
var zeu = /^\w{5,12}$/;
reg.onclick = function(){
    if(username.value != "" && userpass.value != "" && userpass2.value != "" && huida.value != "" && youjian.value != "" && bir.value != ""){
        if(zeu.test(username.value)){
            if(zeu.test(userpass.value)){
                if(userpass.value == userpass2.value){
                    alert("注册成功,请登陆");
                    registered.style.display = "none";
                    regname = username.value;
                    regpass = userpass.value;
                    console.log(regname)
                    console.log(regpass)
                    registered.style.display = "none";
                    mask.style.display = "none";
                }else{
                    alert("两次输入密码不一致");
                }
            }else{
                alert("密码长度为5-12个字符，不可以有特殊字符")
            }
            
        }else{
            alert("用户名长度为5-12个字符，不可以有特殊字符")
            username.value = "";
        }
       
    }else{
        alert("内容不能为空");
    }
}

// // 预加载
// var yubg = ["img/p1big.jpg","img/p2big.jpg","img/p3big.jpg","img/p4big.jpg","img/p5big.jpg","img/p6big.jpg","img/p7big.jpg","img/p8big.jpg","img/p9big.jpg","img/p10big.jpg","img/p11big.jpg","img/p12big.jpg",]
// var yujiazai = document.getElementById("yujiazai");
// var tu = document.getElementById("tu");
// var bom_img = document.getElementById("bom_img");
// var gimg = bom_img.getElementsByTagName("img");
// var next = document.getElementById("next");
// var nnum = document.getElementById("nnum");
// var aa = null;
// var clo = document.getElementById("clo");
// clo.onclick = function(){
//     yujiazai.style.display = "none";
//     mask.style.display = "none";
// }
// for(var i = 0; i < gimg.length; i++){
// gimg[i].index = i;
// aa = gimg[i].index;
// gimg[i].onclick = function(){
//     yujiazai.style.display = "block";
//     mask.style.display = "block";
//     tu.src = yubg[this.index];
//     nnum.innerHTML = this.index;
//     }
// }
// // var ee = null;
// next.onclick = function(){
//     // ee = ee+aa+1;
//     nnum.innerHTML = aa;
//     aa++;
//     if(aa > 12){
//         aa = 1;
//     }
    
//     tu.src = "img/p"+aa+"big.jpg";
// }