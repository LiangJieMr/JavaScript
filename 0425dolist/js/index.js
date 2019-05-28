//等待所有DOM节点加载完成之后执行
$(function(){
    if(localStorage.getItem("con")){
        $("#show").html(localStorage.getItem("con"));
        chuLi();
        remove();
    }
    // keydown(function (event) {
    //     if (event.keyCode == 13) {
    //         alert("111")
    //     }
    //添加事项
    $("#add").click(function(){
        var $va = $("#tex").val();
        var $div = $("<div></div>").addClass("inn");
        $("#show").prepend($div);
        var $span1 = $("<span></span>").addClass("chuLi");
        $div.append($span1);
        var $p1 = $("<p></p>").addClass("p").attr("contenteditable","plaintext-only").html($va);
        $div.append($p1);
        var $remove1 = $("<span></span>").addClass("remove");
        $div.append($remove1);
        var $remove1 = $("<span></span>").addClass("remove1");
        $div.append($remove1);
        var $a1 = $("<a></a>").attr("href","#").html("确认删除");
        $remove1.append($a1);
        chuLi();
        remove();




        //每次清空文本框
        $("#tex").val("")


        localStorage.setItem("con",$("#show").html())
    })

    //删除事项
    function remove(){
        var $w;
        $(".remove").click(function(){
            //获取元素的下标
            var $re = $(".remove").index(this);
            // console.log($re)
            $(".inn").eq($re).css("left","-65px")
            $w = $re;
        })
        $("a").click(function(){
            //获取元素的下标
            var $a = $("a").index(this)
            // var $a = $("a").index(this);
            // console.log($a)
            $(".inn").eq($a).remove()
            localStorage.setItem("con",$("#show").html())
        })
    }
    //处理事项
    function chuLi(){
        $(".chuLi").click(function(){
            $(this).css({
                "background":"url('../0425dolist/img/processed.png')no-repeat",
                "backgroundSize" : "cover"
            })
            //获取元素的下标
            var $index = $(".chuLi").index(this);
            //获取元素的标签名
            var $p = $(".p").eq($index)
            var html = $(".chuLi").next().eq($index).get(0).outerHTML;
            html = html.replace(/^<p/,"<s");
            html = html.replace(/\/p>$/,"/s>");
            $p.replaceWith(html)
            $(".chuLi").next().eq($index).css("color","green")
            $(".chuLi").next().eq($index).attr("contenteditable","false");
            localStorage.setItem("con",$("#show").html())
        })
    }


    var a = 10,b=20,c=30;
    a++;
    ++a;
    var e = ++a+b+++(++c)+a++;
    //        13 20  31  13
    console.log(e);
});
