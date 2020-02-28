const cssList = [
    'home',
];



importAllCSS(cssList);
function importAllCSS(list) {
    list.forEach(element => getcss(element));
}
function getcss(cssSheet) {
    cssSheet = './css/' + cssSheet + '.css';
    let sheet = document.createElement("link");
    sheet.setAttribute('href', cssSheet);
    sheet.setAttribute('rel', 'stylesheet');
    document.head.appendChild(sheet);
};
