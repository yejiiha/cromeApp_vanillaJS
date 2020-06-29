const body = document.querySelector("body");

const IMG_NUM = 6;

function handleImgLoad() {
  console.log("finished loading");
}

function createImage(imgNumber) {
  const image = new Image();

  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");

  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNum = genRandom();
  createImage(randomNum);
}

init();
