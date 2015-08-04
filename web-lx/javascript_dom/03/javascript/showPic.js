/**
 * Created by Administrator on 2015-07-09.
 */

window.onload = function(){
    prepareGallery();
    preparePlaceholder();
};

/*prepareGallery();*/
function prepareGallery(){
    var ul = document.getElementById('gallery');
    var aList = ul.getElementsByTagName('a');
    for(var i = 0 ;i < aList.length; i++){
        aList[i].onclick = function (){
            return showPic(this);
        };
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(targetElement == parent.lastChild){
        parent.appendChild(newElement);
    } else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder(){
    var img = document.createElement('img');
    img.setAttribute('id','placeholder');
    img.setAttribute('src','images/placeholder.png');
    img.setAttribute('alt','placeholder');

    var p = document.createElement('p');
    p.setAttribute('id','description');

    var text = document.createTextNode('Choose an image');
    p.appendChild(text);

    var ul = document.getElementById('gallery');
    insertAfter(img,ul);
    insertAfter(p,img);
}



function showPic(a){
    var source = a.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);


    var description = document.getElementById('description');
    var title = a.getAttribute('title');
    description.innerHTML = '<a href="#">' + title + '</a>' ;


    var ul = a.parentNode.parentNode;
    var node = ul.previousSibling;
    if(node.nodeType == 3){
        node = node.previousSibling;
    }
    var spanList = node.getElementsByTagName('span');
    spanList[1].innerHTML = '-' + a.getElementsByTagName('img')[0].alt;

    return false;

}

function findTag(){

    var nodeList = document.getElementsByTagName('ul');
    var liList = [];
    for(var i = 0; i < nodeList[0].childNodes.length; i++){
        var node = nodeList[0].childNodes[i];
        if(node.nodeType == 1){
            liList.push(node);
        }
    }
    console.log(liList);

    /*var nodeList = document.getElementsByTagName('ul');
    alert(1);
    if(nodeList[0].children){
        alert('success');
    }else{
        alert('failed')
    }*/

  /*  var ul = document.getElementById('gallery');
    ul.previousSibling.previousSibling.innerHTML = '我的画廊';*/
}

function changetitle(){

    var ul = document.getElementById('gallery');
    var node = ul.previousSibling;
    if(node.nodeType == 3){
        node = node.previousSibling;
    }
    var spanList = node.getElementsByTagName('span');
    spanList[0].innerHTML = '我的画廊';
}
