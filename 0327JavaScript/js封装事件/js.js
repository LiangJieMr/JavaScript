function addEvent(obj,type,fn) {
        if(obj.addEventListener){
            obj.addEventListener(type,fn);
        }else{
            obj.attachEvent("on" +type,fn)
        }
    }

    function removeEvent(obj,type,fn){
        if(obj.removeEventListener){
            obj.removeEventListener(type,fn);
        }else{
            obj.detachEvent("on" +type,fn);
        }
    }