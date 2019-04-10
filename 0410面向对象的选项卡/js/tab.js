 /**
   * 选项卡
   * @param {Object} id 选项卡id
   */


function Tab(id){
    var tabBox = document.getElementById(id);
    this.tabBtn = tabBox.getElementsByTagName('input');
    this.tabDiv = tabBox.getElementsByTagName('div');
    
    for(var i=0;i<this.tabBtn.length;i++){
        this.tabBtn[i].index = i;
        var _this = this;
        this.tabBtn[i].onclick = function(){
            _this.clickBtn(this);
           
        };
        
    }
};
/**
  * 为Tab原型添加点击选项卡方法
  * @param {Object} btn 点击的按钮
  */
Tab.prototype.clickBtn = function(btn){
    for(var j=0;j<this.tabBtn.length;j++){
        this.tabBtn[j].className='';
        this.tabDiv[j].style.display='none';
    }
    btn.className='active';
    this.tabDiv[btn.index].style.display='block';
};
