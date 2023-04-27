let homeEl = document.getElementById("home-points")
let guestEl = document.getElementById("guest-points")
let homePoints = 0
let guestPoints = 0

function add1Home() {
    homePoints += 1
    homeEl.textContent = homePoints
}

function add2Home() {
    homePoints += 2
    homeEl.textContent = homePoints
}

function add3Home() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function add1Guest() {
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function add2Guest() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function add3Guest() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function reset() {
    homePoints = 0
    guestPoints = 0
    homeEl.textContent = homePoints
    guestEl.textContent = guestPoints
}



// The data/time we want to countdown to
var countDownDate = new Date("Apr 25, 2023 20:33:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
// var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
// var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
// document.getElementById("days").innerHTML = days + "d "
// document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").textContent = minutes + ":"
document.getElementById("secs").textContent = seconds 
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    // document.getElementById("days").innerHTML = ""
    // document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").textContent = ""
    document.getElementById("secs").textContent = ""
    document.getElementById("end").textContent = "FIN DEL JUEGO";
}
}, 1000);
