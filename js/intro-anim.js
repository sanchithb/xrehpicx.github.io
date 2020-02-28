(() => {
    const t = new TimelineMax();
    t.to('.intro-message', 1, { opacity: 1, ease: Expo.easeOut }, '+=.5')
        .to('.loading', .5, { opacity: 1, ease: Expo.easeOut })
        .fromTo('.intro-cover', 1.4, { height: '100vh' }, { height: '0', ease: Expo.easeOut },'+=1')
        .to('.intro-message', 1, { opacity: 0, ease: Expo.easeOut }, '-=1.5')
})();
/*
to('.intro-message h1', 1.8, { opacity: 0, ease: Expo.easeOut },)
        .fromTo('.loading', 1.8, { opacity: '1' }, { opacity: 1, ease: Expo.easeOut })
    fromTo('.intro-cover', 1.8, { height: '100vh' }, { height: '0', ease: Expo.easeOut }) */