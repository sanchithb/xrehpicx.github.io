const navbar = document.querySelector('nav');
const section = document.querySelector('section');
const holder = document.querySelector('.holder');
const bg = document.querySelector('.bg');
const discription = document.querySelector('.discription');
const t = new TimelineMax();
t.fromTo(holder, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
    .fromTo(holder, 1.2, { width: "100%" }, { width: "70%", ease: Power2.easeInOut })
    .fromTo(bg, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(navbar, .5, { opacity: "0", width: "0%" }, { opacity: "1", width: "100%", x: "0%", ease: Power2.easeInOut }, "-=.8")
    .fromTo(discription, .5, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=.8")