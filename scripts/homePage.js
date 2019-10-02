//Fade in welcome message
window.onload = function () {
    var elem = document.getElementById("down-arrow");
    var opacity = 0;
    var fadeRate = 0.01;
    elem.style.opacity = opacity;
    elem.style.visibility = "visible";
    var interval;

    var startDelay = setTimeout(startAnim, 1800);

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



    //TESTING THE CP CODE
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1250,
        delay: (el, i) => 500 + 75 * i
        }).add({
        });

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



