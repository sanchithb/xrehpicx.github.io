const introAnim1 = (time) => {
    t.fromTo(ele4Cover, time, { width: '100%' }, { width: '0%', ease: Power2.easeInOut })
        .fromTo(ele2Cover, time, { width: '100%' }, { width: '0%', ease: Power2.easeInOut }, '-=1')
        .fromTo(ele1Cover, time, { width: '100%' }, { width: '0%', ease: Power2.easeInOut }, '-=1')
        .fromTo(Backgroundimage, time, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
        .from(discriptionh1, time, { opacity: '0' }, '-=1.1')
        .from(discriptionp, time, { opacity: '0' }, '-=1.1');

}

const showMainNav = () => {
    var cs = getComputedStyle(document.documentElement, null);
    var mainNavWidth = { value: cs.getPropertyValue("--main-navbar-width") };
    const updateRoot = () => {
        document.documentElement.style.setProperty("--main-navbar-width", mainNavWidth.value);
    }
    let t2 = new TimelineMax({ onUpdate: updateRoot });
    t2.fromTo(mainNavWidth, 1, { value: '0vw' }, { value: '20vw', ease: Power4.easeInOut });
};

introAnim1(introAnimTime);
//setTimeout(showMainNav,3000);