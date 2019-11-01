const t = new TimelineMax();
const test = () => {
    const slider = document.querySelector('.slider');
    t.fromTo(slider, 1, { top: '0px', opacity: '0' }, { top: '0px', opacity: '1' }, '+=1.5')
        .fromTo('.filter', 1, { top: '0px', opacity: '0' }, { top: '0px', opacity: '1', onComplete: show });
    for (var i = 1; i < 5; i++) {
        const imageElement = document.createElement('img');
        const image = document.createElement('div');
        image.className = 'bg-image';
        imageElement.src = './assets/img/arr1/img' + i + '.jpg';
        slider.appendChild(image);
        image.appendChild(imageElement);
    }
    slider.style.transition = 'transform 1s cubic-bezier(1,0,0,1)';
    const positions = [-30, -200, -420, -700];
    let counter = 1;
    setInterval(() => {
        slider.style.transform = 'translateX(' + positions[counter] + 'vw)';
        console.log('set');
        counter = counter !== 3 ? counter += 1 : counter = 0;
    }, 3000);
}
test();
//show();
function show() {
    const slider = document.querySelector('.mini-slider');
    const img = document.createElement('img');
    img.src = './assets/img/arr2/img5.jpg'
    slider.appendChild(img);
    let time = .5;
    t.fromTo(img, time, { opacity: '0' }, { opacity: '1' })
        .to(img, time, { opacity: '0', onComplete: () => img.src = './assets/img/arr2/img6.jpg' }, '+=1')
        .to(img, time, { opacity: '1' })
        .to(img, time, { opacity: '0', onComplete: () => img.src = './assets/img/arr2/img7.jpg' }, '+=1')
        .to(img, time, { opacity: '1' })
        .to(img, time, { opacity: '0', onComplete: () => img.src = './assets/img/arr2/img3.jpg' }, '+=1')
        .to(img, time, { opacity: '1' })
        .to(img, time, { opacity: '0', onComplete: () => img.src = './assets/img/arr2/img2.jpg' }, '+=1')
        .to(img, time, { opacity: '1' })
        .to(img, time, { opacity: '0', onComplete: () => img.src = './assets/img/rose.png' })
        .to(img, time, { opacity: '1' },'+=.3')
        .to('.wish', 1, { opacity: '1', onComplete: () => document.querySelector('.filter').style.background ='rgba(0, 0, 0, 0.6)' })
        .to('.thankyou', 1, { opacity: '1' }, '-=1');
        

}