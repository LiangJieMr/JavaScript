window.onload = function(){
    //管理系统
    var box = document.getElementById("box");
    var guanLi = document.getElementById("guanLi");
    var td1 = guanLi.getElementsByTagName("tr");
    var add = document.getElementById("add");

    //添加系统
    var box3 = document.getElementById("box3");
    var name3 = document.getElementById("name3");
    var sex3 = document.getElementById("sex3");
    var age3 = document.getElementById("age3");
    var add1 = document.getElementById("add1");
    var close1 = document.getElementById("close1")


    // 添加学生
    add.onclick = function(){
        box.style.display = "none";
        box3.style.display = "block";
    }
    add1.onclick = function() {
        var tr1 = document.createElement("tr");
        guanLi.appendChild(tr1);
        var td1 = document.createElement("td");
        td1.innerHTML = name3.value;
        tr1.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = sex3.value;
        tr1.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerHTML = age3.value;
        tr1.appendChild(td3);
        var td4 = document.createElement("td");
        tr1.appendChild(td4);
        //创建a标签
        var btnup = document.createElement("a"); //创建一个input控件
        btnup.className = "update"
        btnup.innerHTML = "修改";
        btnup.href = "#";
        td4.appendChild(btnup);
        var btnre = document.createElement("a"); //创建一个input控件
        btnre.className = "remove"
        btnre.innerHTML = "删除";
        btnre.href = "#";
        td4.appendChild(btnre);
        //删除学生
        remove();
        //修改学生
        update();
    }
    close1.onclick = function(){
        box3.style.display = "none";
        box.style.display = "block";
    }


    //删除学生
    function remove(){
        var remove = document.getElementsByClassName("remove");
        for(var i = 0 ; i < remove.length; i++){
            remove[i].onclick = function(){
                if(confirm("确定删除这一行嘛？")){
                    //找到按钮所在行的节点，然后删掉这一行
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                    //btnDel - td - tr - tbody - 删除(tr)
                    //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除
                }
            }
        }
    }
    //调用删除方法
    remove();

    //修改学生信息
    function update(){
        var update = document.getElementsByClassName("update");
        var box2 = document.getElementById("box2");
        var name2 = document.getElementById("name2");
        var age2 = document.getElementById("age2");
        var sex2 = document.getElementById("sex2");
        var up = document.getElementById("up");
        var close = document.getElementById("close");
        //获取表格列数
        var td = guanLi.rows[0].cells.length;
        // alert(td)
        for(var i = 0; i < update.length; i++){
            update[i].index = i;
            update[i].onclick = function() {
                box.style.display = "none";
                box2.style.display = "block";
                var a = guanLi.rows[this.index + 1].cells[0];
                var b = guanLi.rows[this.index + 1].cells[1];
                var c = guanLi.rows[this.index + 1].cells[2];
                name2.value = guanLi.rows[this.index + 1].cells[0].innerHTML;
                sex2.value = guanLi.rows[this.index + 1].cells[1].innerHTML;
                age2.value = guanLi.rows[this.index + 1].cells[2].innerHTML;
                up.onclick = function(){
                    a.innerHTML = name2.value;
                    b.innerHTML = sex2.value;
                    c.innerHTML = age2.value;
                }
            }
        }
        close.onclick = function(){
            box.style.display = "block";
            box2.style.display = "none";
        }
    }
    //调用修改方法
    update();




    //获取表格行数列数
    // var tab = document.getElementById("test") ;
    //     // //表格行数
    //     // var rows = tab.rows.length ;
    //     // //表格列数
    //     // var cells = tab.rows.item(0).cells.length ;

    //获取非行间样式
    // function getStyle(element,attr){
    //     if(window.getComputedStyle){
    //         return window.getComputedStyle(element,false)[attr];
    //     }else{
    //         return element.getcurrentStyle[attr];
    //     }
    // }
}