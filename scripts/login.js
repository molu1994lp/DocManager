
function signIn(){
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    login = login.toLocaleLowerCase();
    password = password.toLocaleLowerCase();
    
    if(login === 'admin' && password =='admin'){
        console.log("hurra");
        window.location.replace("app.html");
    }
    else{
        alert("Podano złe hasło");
    }
}
