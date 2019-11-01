const t = new TimelineMax();
const sendBtn = document.querySelector('.reply');
const intro = () => {
    const slider = document.querySelector('.slider');
    for (var i = 1; i < 10; i++) {
        if (i !== 1 && i !== 9 && i !== 6) {
            const imageElement = document.createElement('img');
            imageElement.className = 'bg-image';
            imageElement.src = './assets/img/arr2/img' + i + '.jpg';
            slider.appendChild(imageElement);
        }
    }

    t.fromTo('.hey', 1, { opacity: '0' }, { opacity: '1' });
    return () => {
        const slider = document.querySelector('.slider');
        slider.style.transition = 'transform 2s cubic-bezier(1,0,0,1)';
        slider.style.transform = 'translateX(30vw)';
        setTimeout(() => slider.style.overflow = 'hidden', 2000);
        return () => {
            t.fromTo('.reply', 1, { opacity: '0' }, { opacity: '1' }, '+=1');
        };
    };
}
intro()()();
sendBtn.addEventListener('click', () => {
    t.to('.hey-reply', .4, { opacity: '0', ease: Power4.EaseInOut })
        .to('.send-btn', .4, { opacity: '0', ease: Power4.EaseInOut }, '-=.4')
        .to('.reply', 1, { bottom: '-10px', left: '-10px', height: '150vh', width: '150vw', ease: Power4.EaseInOut, onComplete: () => { location.href = '/design2/about.html' } }, '-=.4')
});