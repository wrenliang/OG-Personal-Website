window.onload = function () {
    updateSlides(1);
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