/**
 * Created by Administrator on 2015-07-01.
 */


function closeLogin(){
    var loginDiv = document.getElementById('login');
    loginDiv.style.display = 'none';
    var maskDiv = document.getElementById('mask');
    maskDiv.style.display = 'none';
}

function showLogin(){
    var loginDiv = document.getElementById('login');
    loginDiv.style.display = '';
    var maskDiv = document.getElementById('mask');
    maskDiv.style.display = '';
}