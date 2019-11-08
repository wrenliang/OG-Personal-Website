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





    //Card scroll
    new fullpage('#fullpage', {
        //options here
        menu: '#menu',

        autoScrolling:true,
        scrollHorizontally: true,

        onLeave: function (origin, destination, direction) {
            var homePageLink = document.getElementById("homepage-link");
            var projectsLink = document.getElementById("projects-link");
            var passionLink = document.getElementById("passion-link");
            var resumeLink = document.getElementById("resume-link");
            

            if (destination.index == 1) {
                homePageLink.classList.add("nav-colored");
                projectsLink.classList.add("nav-colored");
                passionLink.classList.add("nav-colored");
                resumeLink.classList.add("nav-colored");
                
                homePageLink.classList.remove("nav-transparent");
                projectsLink.classList.remove("nav-transparent");
                passionLink.classList.remove("nav-transparent");
                resumeLink.classList.remove("nav-transparent");
            } else {
                homePageLink.classList.remove("nav-colored");
                projectsLink.classList.remove("nav-colored");
                passionLink.classList.remove("nav-colored");
                resumeLink.classList.remove("nav-colored");
                
                homePageLink.classList.add("nav-transparent");
                projectsLink.classList.add("nav-transparent");
                passionLink.classList.add("nav-transparent");
                resumeLink.classList.add("nav-transparent");
            }
        }
    });

    //methods
    fullpage_api.setAllowScrolling(true);



    var projectLink = document.getElementById("projects-link");
    var passionLink = document.getElementById("passion-link");

    projectLink.onclick() = function () {
        fullpage.moveTo(2);
    }


    passionLink.onclick() = function () {
        fullpage.moveTo(1);
    }
    

}







window.onscroll = function () {

    var leftNav = document.getElementById("left-nav");
    var rightNav = document.getElementById("right-nav");
    var mainNav = document.getElementById("main-nav");

    if (document.documentElement.scrollTop >= 75) {
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

    alert();
}








