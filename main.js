var bgbtn = document.getElementById("mobmenu")
var mobnav = document.getElementById("mobnav")

mobnav.style.left= "-100%"

bgbtn.onclick = ()=> {
    if(mobnav.style.left == "-100%") {
        mobnav.style.left = "50%"
        bgbtn.src = "images/icon-close.svg"
    } else {
        mobnav.style.left = "-100%"
        bgbtn.src = "images/icon-hamburger.svg"
    }
}

