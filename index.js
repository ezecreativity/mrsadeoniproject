let password = "";
let oldPassword = "sati";
password = prompt("Enter your password: ");
if(password === oldPassword){
    alert("correct password, click ok to enter");
}else{
    window.location = "https://mrsadeoni.netlify.app";
}


let button = document.getElementById("hamburger");
let navUL = document.getElementById("nav_ul");
let icon = document.querySelector(".fas fa-bars");

button.addEventListener("click", run);

function run(){
    navUL.classList.toggle("show");
}
