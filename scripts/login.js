
function signIn(){
    var users = [["admin", "admin"],["adam","kowalski"],["aleksandra","kwiatkowska"],["jan","nowak"]]
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    login = login.toLocaleLowerCase();
    password = password.toLocaleLowerCase();
    var log= [login, password]
    var flag = false;
    for(var i=0; i<users.length; i++){
        if(users[i].every(function(element, index){return element === log[index]})){
            if(login === 'admin' && password =='admin'){
                window.location.replace("app.html");
                flag = true;
            }
            else{
               window.location.replace("user.html");
                flag = true;
            }
        }
    }
    if(flag == false){
        window.alert("Podano zle haslo");
        console.log("Zle haslo")
    }
    localStorage.setItem('log', login);
    localStorage.setItem('pass', password);
}
