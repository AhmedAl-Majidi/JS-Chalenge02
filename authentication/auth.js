function store(){

    var email = document.getElementById('userEmail');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    if(email.value.length == 0){    
        alert('Please fill in email');
    
    }else if(pw.value.length == 0){  gb
        alert('Please fill in password');
    
    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
    
    }else if(pw.value.length > 8){
        alert('Max of 8');
    
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
    
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
    
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
    
    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
    }
    
    //checking
    function check(){
    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');
    
    var userEmail = document.getElementById('userEmail');
    var userPw = document.getElementById('userPw');
    // var userRemember = document.getElementById("rememberMe");
    
    if(userEmail.value == storedEmail && userPw.value == storedPw){
        window.close("login.html");
        window.open("products.html");
        
    }else{
        alert('Error on login');
        // <div class="alert alert-danger" role="alert">
        // A simple danger alert—check it out!
        // </div>
    }
    }

 