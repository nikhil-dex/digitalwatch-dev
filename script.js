// header 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// clock
let currntDate = document.querySelector(".jumbotron h2")
let currentTime = document.querySelector(".jumbotron h1")
let Time;
let Timing;
let HH;
let MM;
let SS;
Time = new Date();
setInterval(() => {
Time = new Date();
HH = ((Time.getHours() > 12 ? Time.getHours()%12 : Time.getHours() ))<10 ? '0'+(Time.getHours() > 12 ? Time.getHours()%12 : Time.getHours() ) : (Time.getHours() > 12 ? Time.getHours()%12 : Time.getHours() )
MM = Time.getMinutes() < 10 ? "0"+Time.getMinutes() : Time.getMinutes();
SS = Time.getSeconds() < 10 ? "0"+Time.getSeconds() : Time.getSeconds();
Timing =  HH+ " : " + MM + " : " + SS;
currentTime.innerText = 'Current Time is : ' + Timing;
currntDate.innerText = 'Date is : '+Time.toLocaleDateString();
}, 1000);