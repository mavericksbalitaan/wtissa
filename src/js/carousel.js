const left = document.getElementById("left");
const right = document.getElementById("right");
const carousel = document.getElementById("carousel");
const img00 = require("../assets/images/00.jpg");
const img01 = require("../assets/images/01.jpg");
const img02 = require("../assets/images/02.jpg");
const img03 = require("../assets/images/03.jpg");

const imgArr = [img00, img01, img02, img03];

function prevImg() {
  let idx = Number(carousel.dataset.index);

  if (idx === 0) {
    carousel.src = imgArr[imgArr.length - 1];
    carousel.dataset.index = imgArr.length - 1;
  } else {
    carousel.src = imgArr[idx - 1];
    carousel.dataset.index = idx - 1;
  }
}

function nextImg() {
  let idx = Number(carousel.dataset.index);

  if (idx === imgArr.length - 1) {
    carousel.src = imgArr[0];
    carousel.dataset.index = 0;
  } else {
    carousel.src = imgArr[idx + 1];
    carousel.dataset.index = idx + 1;
  }
}

left.addEventListener("click", prevImg);
right.addEventListener("click", nextImg);
