function login(username,password){
    if(username == "admin" && password == "P@ssw0rd"){
        alert('login สำเร็จ');
    }else{
        alert('login ไม่สำเร็จ');
    }
}

let user = prompt('Username :');
let pass = prompt('Password :');

login(user,pass);