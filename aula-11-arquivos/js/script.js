var image = document.getElementById("lamp");

image.addEventListener("click", trocarImagem)

function trocarImagem() {

    if (image.scr.match("bulbon")) {
        image.src = "./img/pic_bulboff.gif"
    } else {
        image.src = "./img/pic_bulbon.gif"
    }
}