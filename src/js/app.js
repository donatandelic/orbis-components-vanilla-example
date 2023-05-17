import { Discussion } from "@orbisclub/components";
import { createRoot } from "react-dom/client"
import { createElement } from "react"

import "@orbisclub/components/dist/index.modern.css"

function mountOrbisDiscussion(selector, props = {}){
    const rootElement = document.querySelector(selector)
    if(!rootElement) return console.error(`DOM element not found with given selector: ${selector}`)
    
    const root = createRoot(rootElement)
    const discussionComponent = createElement(Discussion, props)
    
    root.render(discussionComponent)
}

function unmountReactRoot(selector){
    const rootElement = document.querySelector(selector)
    if(!rootElement) return console.error(`DOM element not found with given selector: ${selector}`)
    
    const root = createRoot(rootElement)
    root.unmount()
}

window.mountOrbisDiscussion = mountOrbisDiscussion
window.unmountReactRoot = unmountReactRoot

const button = document.getElementById("directFromApp")
button.addEventListener("click", () => {
    mountOrbisDiscussion("div#app")
})