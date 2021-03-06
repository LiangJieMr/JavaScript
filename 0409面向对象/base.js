// 构造函数
function Base(){
    //创建一个数组用来保存获取到的元素
    this.elements = [];
    //通过id获取元素
    this.getId = function(id){
        this.elements.push(document.getElementById(id));
        return this;
    }
    //通过tagName获取元素
    this.getTagName = function(tag){
        var tags = document.getElementsByTagName(tag);
        for(var i = 0; i < tags.length; i++){
            this.elements.push(tags[i]);
        }
        return this;
    }
    //通过name获取元素
    this.getName = function(name){
        var names = document.getElementsByName(name);
        for(var i = 0; i < names.length; i++){
            this.elements.push(names[i]);
        }
        return this;
    }
    //通过class获取元素
    this.getClassName = function(cl){
        var cla = document.getElementsByClassName(cl);
        for(var i = 0; i < cla.length; i++){
            this.elements.push(cla[i]);
        }
        return this;
    }
}

//创建click方法
Base.prototype.click = function(fn){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].onclick = fn;
    }
    return this;
}
//创建html方法
Base.prototype.html = function(str){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].innerHTML = str;
    }
    return this;
}
//实例化之后的对象
var $ = function () {
    return new Base();
}
//var $ = new Base();