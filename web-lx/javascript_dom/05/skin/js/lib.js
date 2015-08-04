/**
 * Created by Administrator on 2015-07-11.
 */

window.onload = function(){

    changeskin('france');
    changeskin('germany');
    changeskin('russia');
};

function changeskin(skinname){
    document.getElementById(skinname).onclick = function() {
        document.getElementById('skin').setAttribute('href', 'css/' + skinname + '.css');
        return false;
    };
}