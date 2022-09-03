// nav
const btn = document.getElementById("nav_toggle");
const links = document.querySelector(".nav_links");

// toggle links
btn.addEventListener("click", () => {
    links.classList.toggle("show_links");
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 20:29:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML =
        hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// plus
const plus = document.getElementsByClassName("plus");
const plusSection = document.getElementsByClassName("plusSection");

plus[0].onclick = () => {
    plusSection[0].classList.toggle("d-none");
};
plus[1].onclick = () => {
    plusSection[1].classList.toggle("d-none");
};

// qustions

const showQ = document.getElementsByClassName("showQ");
const hideQ = document.getElementsByClassName("hideQ");
const answer = document.getElementsByClassName("answer");

showQ[0].addEventListener("click", () => {
    answer[0].classList.toggle("show");
    hideQ[0].classList.toggle("d-none");
    showQ[0].style.display = "none";
});

hideQ[0].addEventListener("click", () => {
    answer[0].classList.toggle("show");
    hideQ[0].classList.toggle("d-none");
    showQ[0].style.display = "inline";
});