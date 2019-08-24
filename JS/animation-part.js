const introAnim1 = (time) => {
    t.fromTo(ele4Cover, time, { width: '100%' }, { width: '0%', ease: Power2.easeInOut })
        .fromTo(ele2Cover, time, { width: '100%' }, { width: '0%', ease: Power2.easeInOut }, '-=1')
        .fromTo(ele1Cover, time, { width: '100%' }, { width: '0%', ease: Power2.easeInOut }, '-=1')
        .fromTo(Backgroundimage, time, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
        .from(discriptionh1, time, { opacity: '0' }, '-=1.1')
        .from(discriptionp, time, { opacity: '0' }, '-=1.1');

}


introAnim1(introAnimTime);