//Fade in welcome message
window.onload = function () {
    var elem = document.getElementById("welcome");
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


    updateSlides(slideIndex);
}



var slideIndex = 1;

function incrementSlide(direction) {
    updateSlides(slideIndex + direction);
}

function updateSlides(newIndex) {
    var slides = document.getElementsByClassName("slides");

    if (newIndex > slides.length) {
        newIndex = 1;
    } else if (newIndex < 1){
        newIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = newIndex;
    slides[newIndex - 1].style.display = "block";
    slides[newIndex - 1].className += " active";
}


