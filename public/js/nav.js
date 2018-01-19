var nav=document.getElementById("nav")
var header=document.getElementById("header")
// var redes=document.getElementById("contenedor-redes-nav")
var posicionesNav=nav.getBoundingClientRect();
var posicionesHeader=header.getBoundingClientRect();
const posicionInicial=posicionesHeader.bottom

window.onscroll=function(){
    if (document.body.scrollTop >= posicionesNav.bottom || document.documentElement.scrollTop >= posicionesNav.bottom){
        nav.style.position= "fixed"
        nav.style.top= "0"
        // redes.style.display= "inline-block"
    } else {   
        nav.style.position= "inherit"
        // redes.style.display= "none"
    }
}