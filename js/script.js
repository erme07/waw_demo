const $navbar = document.querySelector(".main-header")
const $toggleMenu = document.getElementById("toggleMenu")

$toggleMenu.addEventListener("click", ()=>{
    $navbar.classList.toggle("show")
    $toggleMenu.classList.toggle("show")
})

import WAW from "https://cdn.jsdelivr.net/npm/waw-widget/dist/waw.min.js";

const widget = new WAW();
widget.run();