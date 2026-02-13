const myImg = [
  "./img/bridge.jpg",
  "./img/bucharest.jpg",
  "./img/camper.jpg",
  "./img/danube.jpg",
  "./img/fan.jpg",
  "./img/lake.jpg",
  "./img/mountains.jpg",
];

const imgContainer = document.querySelector(".img-container");
const dialog = document.getElementById("my-dialog");


// Das Bild, das im Dialog angezeigt wird
const nextBtn = document.getElementById("next");
const dialogImg = document.getElementById("dialog-image");
nextBtn.before(dialogImg);

dialog.addEventListener("click", (e) => {
  const rect = dialog.getBoundingClientRect();

  const isInDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  //if (!isInDialog) {
  //closeDialog();
  //}
});

let currentIndex = 0;

function showDialogImage(index) {
  currentIndex = index;
  dialogImg.src = myImg[currentIndex];

  const fileName = myImg[currentIndex]
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");
  dialogCaption.innerHTML = `<button  class="btn-responsiv" onclick="prev()"><img src="./img/prev.png" alt="Preview"></button>Image: ${currentIndex + 1} of ${myImg.length} <button class="btn-responsiv" onclick="next()"><img src="./img/next.png" alt="Next"></button>`;
}


//
myImg.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = src.split("/").pop();
  img.loading = "lazy";
  img.style.width = "200px";
  img.style.height = "200px";
  img.tabIndex = 0;
  img.style.cursor = "pointer";

  // Enter / Space öffnet den Dialog (wie ein Button):
  img.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showDialogImage(i);
      openDialog();
    }
  });

  // Maus klick bleibt:
  img.addEventListener("click", () => {
    showDialogImage(i);
    openDialog();
  });



  imgContainer.appendChild(img);

});
dialog.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDialog();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
});
// Text unter dem Bild (Bildname)
const dialogCaption = document.createElement("p");
dialogCaption.id = "dialog-caption";
dialogCaption.style.textAlign = "center";
dialogCaption.style.marginTop = "10px";
dialog.appendChild(dialogCaption);

function openDialog() {
  dialog.showModal();
  dialog.classList.add("opend");

}


function closeDialog() {
  dialog.close();
  dialog.classList.remove("opend");
}

// funktionen um nächstes oder Vorheriges Bild zu sehen





function prev() {
  currentIndex = (currentIndex - 1 + myImg.length) % myImg.length;
  showDialogImage(currentIndex);
}

function next() {
  currentIndex = (currentIndex + 1) % myImg.length;
  showDialogImage(currentIndex);
}
