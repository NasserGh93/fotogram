const myImg = [
  "./img/bridge.jpg",
  "./img/bucharest.jpg",
  "./img/camper.jpg",
  "./img/danube.jpg",
  "./img/fan.jpg",
  "./img/lake.jpg",
  "./img/mountains.jpg",
];
const imagesAlt = [

  "Image of a bridge",
  "Image of  bucharest",
  "Image of a camper",
  "Image of  danube",
  "Image of a fan",
  "Image of a lake",
  "Image of  mountains",
]

let currentIndex = 0;
const dialogImg = document.getElementById("dialog-image");
const dialogCaption = document.getElementById("image-caption");
const dialog = document.getElementById("my-dialog");
const diologcontent = document.getElementById("dialog-content");
function containerpicture(images) {
  const container = document.getElementById("img-container");

  for (let i = 0; i < images.length; i++) {
    container.innerHTML += `
      <button type="button" onclick="openDialog(${i})">
      <img alt="${imagesAlt[i]}" src="${images[i]}"
           onclick="openDialog(${i})">
    </button>`;
  }
}
containerpicture(myImg);

function openDialog(index) {
  currentIndex = index;
  dialog.showModal();
  setImageIndex();
  document.body.classList.add("no-scroll");

}

function setImageIndex() {
  dialogImg.src = myImg[currentIndex];
  dialogCaption.innerHTML = `<button  class="btn-responsiv" onclick="prev()"><img src="./img/prev.png" alt="Preview">
  </button>Image: ${currentIndex + 1} of
  ${myImg.length} <button class="btn-responsiv" onclick="next()"><img src="./img/next.png" alt="Next"></button>`;
}


function next() {

  currentIndex++;

  if (currentIndex > myImg.length - 1) {
    currentIndex = 0;
  }
  setImageIndex()

}

function prev() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = myImg.length - 1;
  }
  setImageIndex()
}

function closeDialog() {
  dialog.close();
  document.body.classList.remove("no-scroll")
}

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    closeDialog()
  }
});



document.addEventListener("keydown", (e) => {

  if (!dialog.open) return;

  if (e.key === "ArrowRight") {
    e.preventDefault();
    next();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prev();
  } else if (e.key === "Escape") {
    closeDialog();
  }
});
