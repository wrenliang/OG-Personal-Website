//Fade in welcome message
window.onload = function () {
    var elem = document.getElementsByClassName("split-screen");
    
    var opacity = 0;
    var fadeRate = 0.01;
    elem[0].style.opacity = opacity;
    elem[0].style.visibility = "visible";
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
            elem[0].style.opacity = opacity;
        }
    }
}