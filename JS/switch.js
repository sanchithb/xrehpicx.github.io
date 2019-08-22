const switch_style = (style, state) => {

    const dark = document.querySelector('.style1');
    const light = document.querySelector('.style2');
    if (style === 'dark') {
        if (state) {

            dark.media = '';
            light.media = 'none';

        }
        else if (!state) {

            dark.media = 'none';
            light.media = '';

        }
    } else if (style === 'light') {
        if (state) {

            light.media = '';
            dark.media = 'none';

        }
        else if (!state) {

            light.media = 'none';
            dark.media = '';

        }
    }
}
var styleButtons = document.querySelectorAll('.style1-button,.style2-button');

styleButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (index === 1) {
            switch_style('dark', 1);
        }
        else {
            switch_style('light', 1);
        }
    });
});