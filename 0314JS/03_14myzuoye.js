// 第一题
var oWork = document.querySelector(".work1");
// console.log(oWork.style)
oWork.onmouseover = function(){
    oWork.style.border = "1px solid yellow"
}
oWork.onmouseout = function(){
    oWork.style.border = ""
}

// 第二题
var oCaiDan = document.querySelector(".caidan");
var oCaiDan2 = document.querySelector("#caidan2");
// console.log(oCaiDan2)
oCaiDan.onclick = function(){
    if(oCaiDan2.style.display == "none"){
        oCaiDan2.style.display = "block";
    }else{
        oCaiDan2.style.display = "none";
    }
        
}

// 第三题
var oSan = document.querySelectorAll(".san");
// // console.log(oSan[2]);
oSan.onclick = function(){
    console.log("fe");
}
function on1(){
    var ff = oSan[0].innerText;
    alert(ff);
}
function on2(){
    var ff = oSan[1].innerText;
    alert(ff);
}
function on3(){
    var ff = oSan[2].innerText;
    alert(ff);
}
function on4(){
    var ff = oSan[3].innerText;
    alert(ff);
}
function on5(){
    var ff = oSan[4].innerText;
    alert(ff);
}
function on6(){
    var ff = oSan[5].innerText;
    alert(ff);
}
// oSan.onclick = function(){
//     for(var a = 1; a <= oSan.length; a++){
//         (function(m){
//             oSan.onclick = function(){
//     			alert(m);
//             }   
//         })(a);
//     }
// }

// 第四题
var oBut1 = document.querySelector(".but1");
console.log(oBut1);
var oBut2 = document.querySelector(".but2");
console.log(oBut2);
var oWenZi = document.querySelector(".wenzi");
console.log(oWenZi);
var ne = 20;
oBut1.onclick = function(){
        oWenZi.style.fontSize = (ne++)+"px";
}
oBut2.onclick = function(){
    oWenZi.style.fontSize = "10px";
}


//第五题
var oBig = document.querySelector(".big");
// console.log(oBig)
var oSmale = document.querySelector(".smale");
// console.log(oSmale)
var oYiDong = document.querySelector(".yidong");
// console.log(oYiDong)
oYiDong.onclick = function(){
    oBig.style.position = "relative";
    oSmale.style.position = "absolute";
    oSmale.style.left = "50%";
    oSmale.style.top = "50%";
    oSmale.style.marginLeft = "-40px";
    oSmale.style.marginTop = "-40px";
}