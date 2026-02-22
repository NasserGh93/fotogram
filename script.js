const myImg = [
  "./img/bridge.jpg",
  "./img/bucharest.jpg",
  "./img/camper.jpg",
  "./img/danube.jpg",
  "./img/fan.jpg",
  "./img/lake.jpg",
  "./img/mountains.jpg",
];

let currentIndex = 0;

function containerpicture(images) {
  const container = document.getElementById("img-container");

  for (let i = 0; i < images.length; i++) {
    container.innerHTML += `
      <img src="${images[i]}"
           width="150"
           style="cursor:pointer"
           onclick="openDialog(${i})">
    `;
  }
}
containerpicture(myImg);

function openDialog(index) {
  currentIndex = index;
  const dialog = document.getElementById("my-dialog");
  const dialogImg = document.getElementById("dialog-image");

  dialogImg.src = myImg[currentIndex];
  dialog.showModal();
  const fileName = myImg[currentIndex]
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");
  dialogCaption.innerHTML = `<button  class="btn-responsiv" onclick="prev()"><img src="./img/prev.png" alt="Preview"></button>Image: ${currentIndex + 1} of ${myImg.length} <button class="btn-responsiv" onclick="next()"><img src="./img/next.png" alt="Next"></button>`;
}


function next() {
  currentIndex++;

  if (currentIndex >= myImg.length) {
    currentIndex = 0; // zurück zum ersten Bild
  }

  document.getElementById("dialog-image").src = myImg[currentIndex];
}

function prev() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = myImg.length - 1;
  }

  document.getElementById("dialog-image").src = myImg[currentIndex];
}

function closeDialog() {
  const dialog = document.getElementById("my-dialog");
  dialog.close();
}
