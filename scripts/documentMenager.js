/* ################  Dotyczy Administratora #################*/
var arrayAll = [];
var arrayDone =[];
var arrayToDo = [];

function addDocuments(id, status, format, user){
    var subArr = [id,status,format,user];
    arrayAll.push(subArr);
}

addDocuments("a1233","gotowe","A4","Adam Kowalski");
addDocuments("b1234","gotowe","A3","Adam Kowalski");
addDocuments("sd32s","oczekujące","A0","Adam Kowalski");
addDocuments("sd3254","gotowe","A1","Jan Nowak");
addDocuments("4432s","gotowe","A2","Aleksandra Kwiatkowska");
addDocuments("z4ds34","oczekujące","A0","Aleksandra Kwiatkowska");
addDocuments("av23","oczekujące","A0","Adam Kowalski");
addDocuments("b5432","gotowe","A0"," Aleksandra Kwiatkowska");


function createTable(arr){
    var table = document.getElementById("myTable");
    for(var r = 1; r <= arr.length; r++){
        var row = table.insertRow(r);
        for( c=0; c<4; c++){
            var cell = row.insertCell(c);
            cell.innerHTML = arr[r-1][c];
        }
    }
}

//createTable(arrayAll);

function deleteContent(){
    var table = document.getElementById("myTable");
    while(table.rows.length != 1){
    table.deleteRow(1);
    }
}
function findDone(){
    arrayDone = [];
    for(var j =0; j< arrayAll.length; j++){
        if((arrayAll[j][1])=== "gotowe"){
           arrayDone.push(arrayAll[j]);
        }
    }
}

function findToDo(){
    arrayToDo = [];
    for(var k =0; k< arrayAll.length; k++){
        if((arrayAll[k][1])=== "oczekujące"){
           arrayToDo.push(arrayAll[k]);
        }
    }
}



function showAll(){
    deleteContent();
    createTable(arrayAll);
}

function showDone(){
    deleteContent();
    findDone();
    createTable(arrayDone);
}

function showToDo(){
    deleteContent();
    findToDo();
    createTable(arrayToDo);
}

function asDone(){
    var id = document.getElementById("Id").value;
    var user = document.getElementById("user").value;
    var flag = false;
    for(var l =0; l< arrayAll.length; l++){
        if(arrayAll[l][0] === id){
            arrayAll[l][1] = "gotowe";
            arrayAll[l][3] = user;
            flag= true;
            break;
        }
    }
    if(flag === false){
        alert("Nie ma takiego id!")
    }
    showDone();
}

function addDoc(){
    var idAdd = document.getElementById("idAdd").value;
    var format = document.getElementById("format").value;
    var status = document.getElementById("status").value;
    var userAdd = document.getElementById("userAdd").value;
    var temp = [idAdd,status,format, userAdd];
    arrayAll.push(temp);
    showAll();
    
}
/*##################### Dotyczy Uzytkownika ################################*/
var arrAllUser = [];
var arrDoneUser = [];
var arrToDoUser = [];
var login = localStorage.getItem('log');
var password = localStorage.getItem('pass');
login = login.charAt(0).toUpperCase() + login.substr(1);
password= password.charAt(0).toUpperCase() + password.substr(1);
var user = login + " " + password;

function allUser(){
    arrAllUser = [];
    for(var i = 0; i< arrayAll.length; i++){
        if(arrayAll[i][3]===user){
            arrAllUser.push(arrayAll[i]);
        }
    }
}

function showAllUser(){
    allUser();
    deleteContent();
    createTable(arrAllUser);
}

function findDoneUser(){
    arrDoneUser = [];
    allUser();
    for(var j =0; j< arrAllUser.length; j++){
        if((arrAllUser[j][1])=== "gotowe"){
           arrDoneUser.push(arrAllUser[j]);
        }
    }
}

function showDoneUser(){
    deleteContent();
    findDoneUser();
    createTable(arrDoneUser);
}

function findToDoUser(){
    arrToDoUser = [];
    allUser();
    for(var k =0; k< arrAllUser.length; k++){
        if((arrAllUser[k][1])=== "oczekujące"){
           arrToDoUser.push(arrAllUser[k]);
        }
    }
}

function showToDoUser(){
    deleteContent();
    findToDoUser();
    createTable(arrToDoUser);
}

function asDoneUser(){
    var id = document.getElementById("IdUser").value;
    var flag = false;
    allUser();
    for(var l =0; l< arrAllUser.length; l++){
        if(arrAllUser[l][0] === id){
            arrAllUser[l][1] = "gotowe";
            flag= true;
            break;
        }
    }
    if(flag === false){
        alert("Nie ma takiego id!")
    }
    showDoneUser();
}

//Resetowanie wartosci pol textowych
$('#myModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

$('#addDoc').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})