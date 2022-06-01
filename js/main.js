function submit_form(){
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if((username === 'test@cronj.com') && (password === '123')){
        window.open('localstorage.html');
    }
    else{
        alert('Username and password is invalid');
        return false;
    }
}



