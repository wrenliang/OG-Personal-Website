//Fade in welcome message
window.onload = function () {
    var elem = document.getElementById("title");
    var opacity = 0;
    var fadeRate = 0.01;
    elem.style.opacity = opacity;
    elem.style.visibility = "visible";
    var interval;

    var startDelay = setTimeout(startAnim, 667);

    function startAnim() {
        interval = setInterval(stepFade, 10);
    }
    
    function stepFade() {
        if (opacity >= 1) {
            clearInterval(interval);
        } else {
            opacity += fadeRate;
            elem.style.opacity = opacity;
        }
    }

    
}



window.onscroll = function () {

    var leftNav = document.getElementById("left-nav");
    var rightNav = document.getElementById("right-nav");
    var mainNav = document.getElementById("main-nav");

    if (document.documentElement.scrollTop >= 100) {
        leftNav.classList.add("nav-colored");
        rightNav.classList.add("nav-colored");
        leftNav.classList.remove("nav-transparent");
        rightNav.classList.remove("nav-transparent");
    } else {
        leftNav.classList.add("nav-transparent");
        rightNav.classList.add("nav-transparent");
        leftNav.classList.remove("nav-colored");
        rightNav.classList.remove("nav-colored");
    }

}