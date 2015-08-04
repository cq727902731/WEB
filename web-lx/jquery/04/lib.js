/**
 * Created by Administrator on 2015/7/20 0020.
 */
var addEvent = document.addEventListener ?
    function(elem, type, listener, useCapture){
        elem.addEventListener(type, listener, useCapture);
    }:
    function(elem, type, listener, useCapture){
        elem.attachEvent('on' + type, listener);
    };

var delEvent = document.removeEventListener ?
    function(elem, type, listener, useCapture){
        elem.removeEventListener(type, listener, useCapture);
    }:
    function(elem, type, listener, useCapture){
        elem.detachEvent('on' + type, listener);
    };


/*var addEvent ;
if(document.addEventListener){

    addEvent = function(elem, type, listener, useCapture){
        elem.addEventListener(type, listener, useCapture);
    };

}else{

    addEvent = function(elem, type, listener, useCapture){
        elem.attachEvent('on' + type, listener);
    };
}*/


