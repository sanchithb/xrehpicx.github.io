/* BABY FUNCTIONSS */
var takeFullScreen = (element) => {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
}
const reStyle = () => {
    var m = document.getElementById('exclude');
    m.media = 'none';
    setTimeout(() => m.media = '', 200);
};
const setCSSvar = (property, value) => {
    property = '--' + property;
    document.documentElement.style
        .setProperty(property, value);
};
const setStyle = (styleID, theme) => {
    let style;
    styles.forEach(element => {
        if (styleID == element.styleName) {
            style = element;
        }
    });
    style.theme = theme;
}
const changeStyleSheet = styleSheet => {
    previousStyleSheet = styleSheet;
    styleSheet = './CSS/' + styleSheet + '.css'
    let styles = document.querySelector('#flat');
    styles.href = styleSheet;
};



/* THE ONE HUGE FUNTION */
const reloadStyle = (name) => {
    var Style;
    styles.forEach(e => {
        if (e['styleName'] === name) {
            Style = e;
        }
    });
    const setFlat = (t) => {
        console.log(Style[t]);
        setCSSvar('bgtheme', Style[t].bgtheme);
        setCSSvar('textColor', Style[t].textColor);
        setCSSvar('buttonbg', Style[t].buttonbg);
        setCSSvar('buttontext', Style[t].buttontext);
    }
    const setMaterial = (t) => {
        setCSSvar('bgtheme', Style[t].bgtheme);
        setCSSvar('lightbgtheme', Style[t].lightbgtheme)
        setCSSvar('buttonbg', Style[t].buttonbg);
        setCSSvar('textColor', Style[t].textColor);
        setCSSvar('buttontext', Style[t].buttontext);
    }
    const setMinimal = (t) => {
        setCSSvar('bgtheme', Style[t].bgtheme);
        setCSSvar('textColor', Style[t].textColor);
        setCSSvar('buttontext', Style[t].buttontext);
    }
    if (Style.styleName === 'flat') {
        if (Style.styleName != previousStyleSheet) {
            if (previousStyleSheet === 'minimal') {
                listenerfix();
                removeScript(minimalScripts);
                reStyle();
            }
            changeStyleSheet(Style.styleName);

        }
        if (Style.theme === 'dark') {
            setFlat(Style.theme);
            setCSSvar('flatdarkbutton', '2%');
            setCSSvar('flatlightbutton', '1%');
        }
        else if (Style.theme === 'light') {
            setFlat(Style.theme);
            setCSSvar('flatdarkbutton', '1%');
            setCSSvar('flatlightbutton', '2%');
        }
    } else if (Style.styleName === 'material') {
        if (Style.styleName != previousStyleSheet) {
            if (previousStyleSheet === 'minimal') {
                listenerfix();
                removeScript(minimalScripts);
                reStyle();
            }
            changeStyleSheet(Style.styleName);

        }

        if (Style.theme === 'dark') {
            setMaterial(Style.theme);
            setCSSvar('materialdarkbutton', '2%');
            setCSSvar('materiallightbutton', '1%');
        }
        else if (Style.theme === 'light') {
            setMaterial(Style.theme);
            setCSSvar('materialdarkbutton', '1%');
            setCSSvar('materiallightbutton', '2%');
        }
    } else if (Style.styleName === 'minimal') {

        if (Style.styleName != previousStyleSheet) {
            changeStyleSheet(Style.styleName);
            getScripts(minimalScripts);
        }
        if (Style.theme === 'dark') {
            setMinimal(Style.theme);
            setCSSvar('minimaldarkbuttontext', '1.3em');
            setCSSvar('minimallightbuttontext', '1em');
        }
        else if (Style.theme === 'light') {
            setMinimal(Style.theme);
            setCSSvar('minimaldarkbuttontext', '1em');
            setCSSvar('minimallightbuttontext', '1.3em');
        }
    }
};

buttons.forEach(b => {
    b.addEventListener('click', () => {
        let style = b.getAttribute('data-style');
        let theme = b.getAttribute('data-theme');
        setStyle(style, theme);
        reloadStyle(style);

    });
})


/* takeFullScreen(document.querySelector('body')); */