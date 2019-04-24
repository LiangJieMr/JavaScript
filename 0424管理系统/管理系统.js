window.onload = function() {
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
    add.onclick = function () {
        box.style.display = "none";
        box3.style.display = "block";
    }
    add1.onclick = function () {
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
    close1.onclick = function () {
        box3.style.display = "none";
        box.style.display = "block";
        name3.value = "";
        sex3.value = "";
        age3.value = "";
    }


    //删除学生
    function remove() {
        var remove = document.getElementsByClassName("remove");
        for (var i = 0; i < remove.length; i++) {
            remove[i].onclick = function () {
                if (confirm("确定删除这一行嘛？")) {
                    //找到按钮所在行的节点，然后删掉这一行
                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                    //remove- td - tr - tbody - 删除(tr)
                    //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除
                }
            }
        }
    }

    //调用删除方法
    remove();

    //修改学生信息
    function update() {
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
        for (var i = 0; i < update.length; i++) {
            update[i].index = i;
            update[i].onclick = function () {
                box.style.display = "none";
                box2.style.display = "block";
                var a = guanLi.rows[this.index + 1].cells[0];
                var b = guanLi.rows[this.index + 1].cells[1];
                var c = guanLi.rows[this.index + 1].cells[2];
                name2.value = guanLi.rows[this.index + 1].cells[0].innerHTML;
                sex2.value = guanLi.rows[this.index + 1].cells[1].innerHTML;
                age2.value = guanLi.rows[this.index + 1].cells[2].innerHTML;
                up.onclick = function () {
                    a.innerHTML = name2.value;
                    b.innerHTML = sex2.value;
                    c.innerHTML = age2.value;
                }
            }
        }
        close.onclick = function () {
            box.style.display = "block";
            box2.style.display = "none";
        }
    }

    //调用修改方法
    update();

    // 模糊搜索
    //根据姓名进行搜索
    var search = document.getElementById("search");
    var container = document.getElementById("container");
    search.onclick = function () {
        var va = container.value;
        //获取table的id标识
        // var guanLi = document.getElementById("guanLi");
        var rowsLength = guanLi.rows.length;//表格总共有多少行
        // console.log(rowsLength)
        var searchCol = 0;//要搜索的哪一列，这里是第一列，从0开始数起

        for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
            var searchText = guanLi.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
            // alert(searchText);
            // console.log(searchText.match(va))
            if (searchText.match(va)) {
                // console.log(searchText.match(va))
                //用match函数进行筛选，如果值，即变量 key的值为空，返回的是ture，
                guanLi.rows[i].style.display = "";//显示行操作，
            } else {
                // console.log(searchText.match(va))
                guanLi.rows[i].style.display = 'none';//隐藏行操作
            }
        }
    }

    //对表格进行排序
    //tBodies[0] 表格的主干部分
    var asc = document.getElementById("asc");
    var desc = document.getElementById("desc");

    //升序
    asc.onclick = function () {
        var tr = guanLi.getElementsByTagName('tr');
        var array = [];
        for (var i = 1; i < tr.length; i++) {
            array.push(tr[i]);
        }
        SortUp(array);
        for (var i = 0; i < array.length; i++) {
            guanLi.appendChild(array[i]);
        }
        array = null;

        function SortUp(array) {
            for (var i = 0; i < array.length; i++) {
                // console.log("i")
                for (var j = i + 1; j < array.length; j++) {
                    // console.log("j")
                    // console.log(array[j])
                    if (array[j] === undefined) {
                        continue;
                    }
                    if (array[i].getElementsByTagName('td')[2].innerText <= array[j].getElementsByTagName('td')[2].innerText) {
                        // console.log(array[i].getElementsByTagName('td')[2].innerText)
                        // console.log(array[j].getElementsByTagName('td')[2].innerText)
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
    }

    //降序
    desc.onclick = function () {
        var tr = guanLi.getElementsByTagName('tr');
        var array = [];
        for (var i = 1; i < tr.length; i++) {
            array.push(tr[i]);
        }
        SortDown(array);
        for (var i = 0; i < array.length; i++) {
            guanLi.appendChild(array[i]);
        }
        array = null;

        function SortDown(array) {
            for (var i = 0; i < array.length; i++) {
                for (var j = i + 1; j < array.length; j++) {
                    if (array[j] === undefined) {
                        continue;
                    }
                    if (array[i].getElementsByTagName('td')[2].innerText >= array[j].getElementsByTagName('td')[2].innerText) {
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
    }
}









    // var list = ["中国","美国","英国"];
    // var arr = [];
    // search.onclick = function(){
    //     var va = container.value;
    //     for(var i = 0; i < list.length; i++){
    //         if(list[i].indexOf(va) >= 0){
    //             arr.push(list[i])
    //         }
    //     }
    //     console.log(arr)
    // }


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