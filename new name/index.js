/* navbar item js*/

var mobliemenu=document.getElementById("menu-close")
var mobilemenuclose=document.getElementById("all-menu-item-close")
var mobilemenuopen=document.getElementById("menu-item-open")

mobilemenuopen.addEventListener("click", function(){
    mobliemenu.style.transform="translatex(0px)"
})

mobilemenuclose.addEventListener("click", function(){
    mobliemenu.style.transform="translatex(-400px)"
})