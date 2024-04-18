document.addEventListener("DOMContentLoaded", function(){
    // gsap.to(".sticky", {
    //     scrollTrigger: {
    //         trigger: ".sticky",
    //         start: "top top",
    //         end: () =>
    //             "+=" +
    //             (window.innerHeight + 
    //              document.querySelector(".website-content").offsetHeight * 0.5),
    //         srub:1,
    //         pin:true,
    //     },
    //     y: 250,
    //     scale: 0.75,
    //     rotation: -15,
    //     ease: "power3.out",
    // });

    gsap.fromTo(
        ".website-content", 
        {
            x: 100,
            scale: 0.3,
            rotation: 15,
        },
        {
            scrollTrigger: {
                trigger: ".website-content",
                start: "top 350%" ,
                end: "top 50%",
                scrub: 1,
            },
            x:0,
            scale:1,
            rotation:0,
            ease: "power3.out",
        }   
    );
});

// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

