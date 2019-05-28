//获取最大盒子
var bigBox = document.getElementById("bigBox");
//获取所有li  图片
var oUl = document.getElementById("banner");
var oLi = oUl.getElementsByTagName("li");
//获取焦点
var aUl = document.getElementById("jiaoDian");
var aLi = aUl.getElementsByTagName("li");

//获取按钮
var leftbtn = document.getElementById("leftbtn");
var rightbtn = document.getElementById("rightbtn");

//定义一个变量控制按钮
var num = 0;
//定义一个定时器变量
var timer = null;

//设置焦点触碰
for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
       tab(this.index)
        num = this.index;
    }
}
//点击右按钮
rightbtn.onclick = function(){
    num++;
    //五张图片
    //当num = 4 是第五张图片
    //所以要从0重新开始
    if(num > 4){
        num = 0;
    }
    // console.log(num);1 2 3 4 0
    tab(num);
}
// 点击左按钮
leftbtn.onclick = function(){
    num--;
    if(num < 0){
        num = 0;
    }
    tab(num);
}
//设置一个定时器
//封装方便调用
function move(){
    num++;
    if(num > 4){
        num = 0;
    }
    tab(num);
}
// 调用定时器
//一秒轮播一次
timer = setInterval(move,1000);

// 当鼠标进入图片时   关闭定时器
bigBox.onmouseover = function(){
    clearInterval(timer);
}
// 当鼠标离开图片时   开启定时器
bigBox.onmouseout = function(){
    timer = setInterval(move,1000);
}

//避免代码繁多  封装图片和原点的变化
function tab(index) {
    // 先清空所有class
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].className = "";
        oLi[i].className = "";
    }
    aLi[index].className = "current";
    oLi[index].className = "active";
}