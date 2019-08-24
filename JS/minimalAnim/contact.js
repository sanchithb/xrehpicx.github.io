console.log('contact.js ran');
introAnimTime = 0;
var profilePic = document.querySelector('.profile-image');
var profile = document.querySelector('.profile');
var moreinfo = document.querySelector('.more-profiles');
var moreinfotext;
const moreInfoAnim = (state) => {
    if (state) {
        if (!moreinfotext) {
            moreinfotext = true;
            t.fromTo(moreinfo, .6, { x: '0', opacity: '0' }, { x: '5vw', opacity: '1', ease: Power4.easeInOut });
        }
    } else {
        moreinfotext = false;
        t.fromTo(moreinfo, .6, { x: '5vw', opacity: '1' }, { x: '0', opacity: '0', ease: Power4.easeInOut });
    }

}
class curtainAnim {
    constructor(start = 't', time = .5, curtainColor = '#050505') {
        this.start = start;
        this.time = time;
        this.curtainColor = curtainColor;
    }
    cover = (start = this.start, time = this.time, curtainColor = this.curtainColor) => {
        curtain.style.opacity = '1';
        curtain.style.background = curtainColor;
        curtain.style.zIndex = '10';
        if (start === 't') {
            curtain.style.width = '100%';
            t.fromTo(curtain, time, { height: '0vh' }, { height: '100vh', ease: Power4.easeInOut });
        }
        else if (start === 'b') {
            curtain.style.width = '100%';
            curtain.style.height = '100vh';
            t.fromTo(curtain, time, { top: '100%' }, { top: '0%', ease: Power4.easeInOut });
        }
        else if (start === 'l') {
            curtain.style.height = '100vh';
            t.fromTo(curtain, time, { width: '0%' }, { width: '100%', ease: Power4.easeInOut });
        }
        else if (start === 'r') {
            curtain.style.width = '100%';
            curtain.style.height = '100vh';
            t.fromTo(curtain, time, { left: '100%' }, { left: '0%', ease: Power4.easeInOut });
        }

    }
    uncover = (start = this.start, time = this.time, curtainColor = this.curtainColor) => {
        curtain.style.opacity = '1';
        curtain.style.background = curtainColor;
        curtain.style.zIndex = '10';
        if (start === 't') {
            
            t.fromTo(curtain, time, { height: '100vh' }, { height: '0vh' , ease: Power4.easeInOut });
        }
        else if (start === 'b') {
            
            t.fromTo(curtain, time, { top: '0%' }, { top: '100%', ease: Power4.easeInOut });
        }
        else if (start === 'l') {
            
            t.fromTo(curtain, time, { width: '100%' }, { width: '0%', ease: Power4.easeInOut });
        }
        else if (start === 'r') {
            
            t.fromTo(curtain, time, { left: '0%' }, { left: '100%', ease: Power4.easeInOut });
        }

    }
}

profilePic.addEventListener('mouseover', () => moreInfoAnim(true));
profile.addEventListener('mouseleave', () => moreInfoAnim(false));
moreinfoCurtain = new curtainAnim('l', 1);
moreinfo.addEventListener('click', () => {
    moreinfoCurtain.cover();
});

