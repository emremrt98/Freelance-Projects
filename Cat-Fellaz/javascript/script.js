// nAVBAR CLICK Button
const button = document.querySelector(".navbar-toggler");
const socialIcon1 = document.querySelector(".social-navbar1");
const socialIcon2 = document.querySelector(".social-navbar2");
const socialIcon3 = document.querySelector(".social-navbar3");
const socialIcon4 = document.querySelector(".social-navbar4");
let count = 0;
button.addEventListener("click", function () {
    count++;
    
    if (count % 2 == 0) {
        socialIcon1.style.display = "none";
        socialIcon2.style.display = "none";
        socialIcon3.style.display = "none";
        socialIcon4.style.display = "none";

    }
    else {
        socialIcon1.style.display = "block";
        socialIcon2.style.display = "block";
        socialIcon3.style.display = "block";
        socialIcon4.style.display = "block";

    }
});

// SCROLL BAR ANIMATION
console.log($(window).scrollTop());
// HOME
$(".nav-home").click(function(){
    $("html,body").animate({scrollTop:0},700);
    return false;
})

// ABOUT

$(".nav-about").click(function(){
    $("html,body").animate({scrollTop:600},700);
    return false;
})

// Roadmap

$(".nav-road").click(function(){
    $("html,body").animate({scrollTop:1700},700);
    return false;
})


// TEAM
$(".nav-team").click(function(){
    $("html,body").animate({scrollTop:2400},700);
    return false;
})

// ANIMATION 

const navbar = document.querySelector("#animate1")
function animation() {
    var controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });


    const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t2.fromTo(".animate2", 0.5, { x: "-100rem", opacity: 0 }, { x: 0, opacity: 1 });
    t2.fromTo(".animate3", 0.1, { x: "100rem", opacity: 0 }, { x: 0, opacity: 1 });

    new ScrollMagic.Scene({
        triggerElement: "#roadMap",
        triggerHook: 0.5,
        reverse: false
    }).setTween(t2).addTo(controller);

}

animation();