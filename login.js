let signincontainer = document.getElementById('signin');
let logincontainer = document.getElementById('login');

function Showsignin(){
    logincontainer.style.display = 'none'; 
    signincontainer.style.display = 'inline-block';
}
function ShowLogin(){
    signincontainer.style.display = 'none'; 
    logincontainer.style.display = 'inline-block';
}