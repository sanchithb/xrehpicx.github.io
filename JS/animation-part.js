const main = document.querySelector('main');

const ele1 = document.querySelector('.grid-ele1');
const ele2 = document.querySelector('.grid-ele2');
const ele3 = document.querySelector('.grid-ele3');
const ele4 = document.querySelector('.grid-ele4');

const ele1Cover = document.querySelector('.ele1-cover');
const ele2Cover = document.querySelector('.ele2-cover');
const ele4Cover = document.querySelector('.ele4-cover');

const discription = document.querySelector('.discription');
const discriptionh1 = document.querySelector('.discription h1');
const discriptionp = document.querySelector('.discription p');
const Backgroundimage = document.querySelector('.grid-ele2 img');

const t = new TimelineMax();

t.fromTo(ele4Cover, 1, { width: '100%' }, { width: '0%', ease: Power2.easeInOut })
    .fromTo(ele2Cover, 1, { width: '100%' }, { width: '0%', ease: Power2.easeInOut }, '-=1')
    .fromTo(ele1Cover, 1, { width: '100%' }, { width: '0%', ease: Power2.easeInOut }, '-=1')
    .fromTo(Backgroundimage, 1, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
    .from(discriptionh1, 1, { opacity: '0' }, '-=1.1')
    .from(discriptionp, 1, { opacity: '0' }, '-=1.1');
