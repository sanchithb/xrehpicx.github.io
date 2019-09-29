
const mainScripts = [
    {
        src: './JS/elements.js'
    },
    {
        src: './JS/stateKeepers.js'
    },
    {
        src: './JS/animation-part.js'
    },
    {
        src: './JS/styles.js'
    },
    {
        src: './JS/switch.js'
    }
]
/* const minimalScripts = [
  {
    src: './JS/minimalAnim/sideThemeChanger.js'
  },
  {
    src: './JS/minimalAnim/contact.js'
  }
] */

const getScript = (scriptProp) => {
    var script = document.createElement('script')
    script.src = scriptProp.src;
    if (scriptProp.integrity !== undefined) { script.integrity = scriptProp['integrity']; }
    if (scriptProp.crossorigin !== undefined) { script.setAttribute('crossorigin', scriptProp['crossorigin']); }
    document.head.appendChild(script)
};
const getScripts = (scripts) => {
    scripts.forEach(element => {
        getScript(element)
    })
};
var removeScript = (scriptList) => {
    var allScriptTags = document.querySelectorAll('script')
    scriptList.forEach(ele => {
        allScriptTags.forEach(element => {
            if (ele.src === element.src) { element.parentNode.removeChild(element); }
        })
    })
    console.log('removed', scriptList)
}

getScripts(mainScripts)
