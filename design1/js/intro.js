const t = new TimelineMax();
const introFadeIn = () => {
    t.fromTo(title, 1, { y: '20px', opacity: '0' }, { y: '0px', opacity: '1', ease: Power3.easeOut }, '+=.5')
        .fromTo(decide, 1, { y: '10px', opacity: '0' }, { y: '0px', opacity: '1', ease: Power4.easeOut }, '-=.5')
        .fromTo(aboutBtn, 1, { y: '10px', opacity: '0' }, { y: '0px', opacity: '1', ease: Power4.easeOut }, '-=1');
};
const transitionToSomePageOld = (ss = 1, es = 1) => {
    t.to('.cover', ss, { width: '100%', ease: Power4.easeOut })
        .to('.cover', es, { width: '0%', ease: Power4.easeIn });
};
const transitionToSomePage = () => {
    console.log('ran');
    t.to(title, 1, { y: '-100%', onComplete: () => { 
        decide.style.textDecoration = 'none'; 
        decide.style.fontWeight = "900";
        document.body.style.transition='transform .4s ease-in-out';
        document.body.style.transform = 'translateY(-100vh)';
    }, ease: Power4.easeIn })
        .to(decide, 1, { y: window.mobilecheck() || window.mobileAndTabletcheck() ? '-80vh' : '-90vh', fontSize: '2em', ease: Power1.easeInOut }, '-=.2')
        .to(aboutBtn, 1, { opacity: '0' }, '-=1');
};
introFadeIn();
transitionToSomePage();
