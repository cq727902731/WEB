/**
 * Created by Administrator on 2015/7/17 0017.
 */


function get(url,callback){

    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();//ff,chrome,Opera,Safari,IE7+
    }else{
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//ie6
    }

    //监听
    xmlHttp.onreadystatechange = function(){

        if(xmlHttp.readyState == 4){

            if(xmlHttp.status == 200){
                callback(xmlHttp);
            }else{
                alert('请求失败：' + xmlHttp.status);
            }
        }
    };

    xmlHttp.open('GET',url,true);
    xmlHttp.send();
}

function post(url,callback,data){

    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();//ff,chrome,Opera,Safari,IE7+
    }else{
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//ie6
    }

    //监听
    xmlHttp.onreadystatechange = function(){

        if(xmlHttp.readyState == 4){

            if(xmlHttp.status == 200){
                callback(xmlHttp);
            }else{
                alert('请求失败：' + xmlHttp.status);
            }
        }
    };

    xmlHttp.open('POST',url,true);
    xmlHttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xmlHttp.send(data);
}