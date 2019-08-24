console.log('side theme changer imported');
const tt = new TimelineMax();
const showMenue=()=>{
    styleMenue.style.fontSize='3em';
    tt.staggerTo(buttons, .1, { opacity:'1',width:'15vw' },.1);
    
};
const hideMenue = () => {
    styleMenue.style.fontSize = '2em';
    tt.staggerTo(buttons, 0.1, { opacity: '0', width: '20vw' }, 0.01);
};
styleMenue.addEventListener('mouseover',showMenue);

styleMenueItemHolder.addEventListener('mouseleave', hideMenue);

const listenerfix=()=>{
    styleMenue.removeEventListener('mouseover', showMenue);
    styleMenueItemHolder.removeEventListener('mouseleave', hideMenue); 
};

/* styleMenueItemHolder.addEventListener('mouseover', () => {
    t.fromTo(styleMenue, .2, { scale: '1' }, { scale: '0.8', ease: Power2.easeInOut });
});
 */
/* styleMenue.addEventListener('mouseout', () => {
    t.fromTo(styleMenue, .2, { scale: '.8' }, { scale: '1', ease: Power2.easeInOut });
}); */

/* scaleX: 0.8, scaleY: 0.8, opacity: 0.7 */