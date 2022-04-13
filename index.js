let button = document.getElementById("hamburger");
let navUL = document.getElementById("nav_ul");
let icon = document.querySelector(".fas fa-bars");

button.addEventListener("click", run);

function run(){
    navUL.classList.toggle("show");
}
