/**
 * Created by Administrator on 2015-05-28.
 */

var userList = [
    {
        username: 'Rose',
        age: 19,
        code: '20112151'
    },
    {
        username: 'Jack',
        age: 20,
        code: '20112152'
    },
    {
        username: 'Tom',
        age: 21,
        code: '20112153'
    },
    {
        username: 'Jerry',
        age: 21,
        code: '20112154'
    }
];

function listUsers(){

    var str = '<tr><th>序号</th><th>姓名</th><th>年龄</th><th>学号</th><th>删除</th><th>编辑</th></tr>';
    for(var i = 0; i < userList.length; i++){
        var user = userList[i];
        str += '<tr>';
        str += '<td>' + (i + 1) + '</td>';
        str += '<td>' + user.username + '</td>';
        str += '<td>' + user.age + '</td>';
        str += '<td>' + user.code + '</td>';
        str += '<td><input type="button" value="删除" onclick="deleteUser(' + i + ')"></td>';
        str += '<td><input type="button" value="编辑" onclick="selectUser(' + i + ')"></td>';
        str += '</tr>';
    }

    document.getElementById('list').innerHTML = str;
}

function addUser(){

    var username = f.username.value;
    var age = f.age.value;
    var code = f.code.value;

    var user = {
        username: username,
        age: age,
        code: code
    };

    userList.push(user);
    listUsers();
/*    console.log(user);*/
}


function deleteUser(index){
    //删除：
    //TODO
    userList.splice(index,1);
    console.dir(userList);
    listUsers();
}

function selectUser(index){
    var user = userList[index];
    f.username.value = user.username;
    f.age.value = user.age;
    f.code.value = user.code;
    f.userindex.value = index;
}

function updateUser(){
    var username = f.username.value;
    var age = f.age.value;
    var code = f.code.value;

    var user = {
        username: username,
        age: age,
        code: code
    };

    userList[f.userindex.value] = user;

    listUsers();
    //console.log(userList);
}
