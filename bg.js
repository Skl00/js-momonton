const body = document.querySelector("body");

const IMG_NUMBER = 3;

/*
function handleImgLoad(event) {
    console.log("finished loading")
}
*/

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `imgs/${imgNumber}.jpg`;
    image.classList.add("bgImg");

    //image.addEventListener("loadend", handleImgLoad);
    body.appendChild(image);

}

function genRandom() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();