var buttons = document.querySelectorAll('.button');
var previousStyleSheet;
const getButton = (style, theme) => {
    var b;
    buttons.forEach((element) => {
        if (element.getAttribute('data-style') === style && element.getAttribute('data-theme') === theme) {
            b = element;
        }
    });
    return b;
}
var styles = [
    {
        styleName: 'flat',
        theme: 'dark',
        dark: {
            bgtheme: 'black',
            textColor: 'white',
            buttonbg: 'white',
            buttontext: 'black',
        },
        light: {
            bgtheme: 'white',
            textColor: 'black',
            buttonbg: 'black',
            buttontext: 'white',
        },
        state: 1,
    },
    {
        styleName: 'material',
        theme: 'dark',
        dark: {
            bgtheme: '#000a12',
            lightbgtheme: '#4f5b62',
            textColor: 'white',
            buttonbg: '#0039cb',
            buttontext: 'white',
        },
        light: {
            bgtheme: '#ffffff',
            lightbgtheme: '#c7c7c7',
            textColor: 'black',
            buttonbg: '#2962ff',
            buttontext: 'white',
        },
        state: 0
    }
]
const changeStyleSheet = styleSheet => {
    previousStyleSheet = styleSheet;
    styleSheet = './CSS/' + styleSheet + '.css'
    let styles = document.querySelector('#flat');
    styles.href = styleSheet;
};

const reloadStyle = () => {
    var Style = styles.reduce((newest, style) => {
        return (newest.state || 0) > style.state ? newest : style;
    }, {});
    if (Style.styleName === 'flat') {
        if (Style.styleName != previousStyleSheet) {
            changeStyleSheet(Style.styleName);
        }
        if (Style.theme === 'dark') {
            setCSSvar('bgtheme', Style.dark.bgtheme);
            setCSSvar('textColor', Style.dark.textColor);
            setCSSvar('buttonbg', Style.dark.buttonbg);
            setCSSvar('buttontext', Style.dark.buttontext);
            setCSSvar('flatdarkbutton', '2%');
            setCSSvar('flatlightbutton', '1%');
        }
        else if (Style.theme === 'light') {
            setCSSvar('bgtheme', Style.light.bgtheme);
            setCSSvar('textColor', Style.light.textColor);
            setCSSvar('buttonbg', Style.light.buttonbg);
            setCSSvar('buttontext', Style.light.buttontext);
            setCSSvar('flatdarkbutton', '1%');
            setCSSvar('flatlightbutton', '2%');
        }
    } else if (Style.styleName === 'material') {
        if (Style.styleName != previousStyleSheet) {
            changeStyleSheet(Style.styleName);
        }

        if (Style.theme === 'dark') {
            setCSSvar('bgtheme', Style.dark.bgtheme);
            setCSSvar('lightbgtheme', Style.dark.lightbgtheme)
            setCSSvar('textColor', Style.dark.textColor);
            setCSSvar('buttonbg', Style.dark.buttonbg);
            setCSSvar('buttontext', Style.dark.buttontext);
            setCSSvar('materialdarkbutton', '2%');
            setCSSvar('materiallightbutton', '1%');
        }
        else if (Style.theme === 'light') {
            setCSSvar('bgtheme', Style.light.bgtheme);
            setCSSvar('textColor', Style.light.textColor);
            setCSSvar('buttonbg', Style.light.buttonbg);
            setCSSvar('buttontext', Style.light.buttontext);
            setCSSvar('materialdarkbutton', '1%');
            setCSSvar('materiallightbutton', '2%');
        }
    }
    /* getComputedStyle(document.documentElement)
        .getPropertyValue('--my-variable-name'); */


};
const setCSSvar = (property, value) => {
    property = '--' + property;
    document.documentElement.style
        .setProperty(property, value);
};
const setStyle = (styleID, theme) => {
    styles[styleID].theme = theme;
    styles[styleID].state = Date.now() / 1000;
}
buttons.forEach(b => {
    b.addEventListener('click', () => {
        let style = b.getAttribute('data-style');
        let theme = b.getAttribute('data-theme');
        if (style === 'flat') {
            setStyle(0, theme);
        } else if (style == 'material') {
            setStyle(1, theme);
        }
        reloadStyle();
    });
})

