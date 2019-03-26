var cSmall = document.getElementsByClassName("small")[0];
var cInp = document.getElementsByClassName("inp")[0];
var cBig = document.getElementsByClassName("big")[0];
var red = 0;
cSmall.onclick = function(){
    if(cInp.value == "0"){
        cInp.value = "0";
        red = cInp.value;
    }else{
        cInp.value--;
        red = cInp.value;
    }
}
cBig.onclick = function(){
    if(cInp.value == "255"){
        cInp.value = "255";
        red = cInp.value;
    }else{
        cInp.value++;
        red = cInp.value;
    }
}
var cSmall1 = document.getElementsByClassName("small1")[0];
var cInp1 = document.getElementsByClassName("inp1")[0];
var cBig1 = document.getElementsByClassName("big1")[0];
var green = 0;
cSmall1.onclick = function(){
    if(cInp1.value == "0"){
        cInp1.value = "0";
        green = cInp1.value;
    }else{
        cInp1.value--;
        green = cInp1.value;
    }
}
cBig1.onclick = function(){
    if(cInp1.value == "255"){
        cInp1.value = "255";
        green = cInp1.value;
    }else{
        cInp1.value++;
        green = cInp1.value;
    }
}
var cSmall2 = document.getElementsByClassName("small2")[0];
var cInp2 = document.getElementsByClassName("inp2")[0];
var cBig2 = document.getElementsByClassName("big2")[0];
var blue = 0;
cSmall2.onclick = function(){
    if(cInp2.value == "0"){
        cInp2.value = "0";
        blue = cInp2.value;
    }else{
        cInp2.value--;
        blue = cInp2.value;
    }
}
cBig2.onclick = function(){
    if(cInp2.value == "255"){
        cInp2.value = "255";
        blue = cInp2.value;
    }else{
        cInp2.value++;
        blue = cInp2.value;
    }
}
var cChange = document.getElementsByClassName("change")[0];
var cBody = document.getElementsByTagName("body")[0];
cChange.onclick = function(){
    cBody.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}
