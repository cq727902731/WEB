/**
 * Created by Administrator on 2015-07-13.
 */
function checkEmpty(name,msg){

    if(msg === 'undefined'){
        msg = '此字段不能为空';
    }
    var element = document.f1[name];
    var errorSpan = document.getElementById(name + '_error');
    if(element.value === ''){
        /*alert(msg);*/
        errorSpan.innerText = msg;
        addClass(element,'error_input');
        return false;
    }else{
        errorSpan.innerText = '';
        removeClass(element,'error_input');
        return true;
    }
}

function checkRadioCheckBoxEmpty(formname,name,msg){

    if(msg === 'undefined'){
        msg = '此字段不能为空';
    }

    var errorSpan = document.getElementById(name + '_error');
    var radioList = document[formname][name];
    for(var i = 0;i < radioList.length; i++){
        var radio = radioList[i];
        if(radio.checked){
            errorSpan.innerText = '';
            removeClass(radio.parentNode,'error_input');
            return true;
        }
    }

    errorSpan.innerText = msg;
    addClass(radioList[0].parentNode,'error_input');
    return false;
}


function addClass(element,className){

    var arr = element.className.split(' ');
    for(var i = 0;i < arr.length;i++){

        if(arr[i] == className){
            return;
        }
    }
    element.className += ' ' + className;
}


function removeClass(element,className){

    var arr = element.className.split(' ');
    for(var i = 0;i < arr.length;i++){

        if(arr[i] == className){
            arr.splice(i,1);
            break;
        }
    }
    element.className = arr.join(' ');
}

function confirmReset(){
    return confirm('你确定要重置表单么');
}

function buttonSubmit(){
    var usernameOK = checkEmpty('username','请输入用户名');
    var passwordOK = checkEmpty('password','请输入密码');

    if(usernameOK && passwordOK){

        if(document.f1.username.value === 'admin'){
            document.f1.action = 'admin/login';
        }else{
            document.f1.action = 'user/login';
        }
        document.f1.submit();
    }
}

function inputReset(){

    document.f1.reset();
}