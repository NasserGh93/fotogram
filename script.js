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
const dialogImg = document.createElement("img");
dialogImg.id = "dialog-img";
dialogImg.style.width = "400px";
dialogImg.style.height = "400px";
dialog.appendChild(dialogImg);

dialog.addEventListener("click", (e) => {
  const rect = dialog.getBoundingClientRect();

  const isInDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  if (!isInDialog) {
    closeDialog();
  }
});

let currentIndex = 0;

function showDialogImage(index) {
  currentIndex = index;
  dialogImg.src = myImg[currentIndex];

  const fileName = myImg[currentIndex]
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/,);
  dialogCaption.textContent = `Image: ${currentIndex + 1} of ${myImg.length}  ${fileName}`;
}



myImg.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = src.split("/").pop();
  img.loading = "lazy";
  img.style.width = "200px";
  img.style.height = "200px";

  img.addEventListener("click", () => {
    showDialogImage(i);
    openDialog();
  });

  imgContainer.appendChild(img);
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
  if (currentIndex > 0) showDialogImage(currentIndex - 1);
}

function next() {
  if (currentIndex < myImg.length - 1) showDialogImage(currentIndex + 1);
}


function prev() {
  currentIndex = (currentIndex - 1 + myImg.length) % myImg.length;
  showDialogImage(currentIndex);
}

function next() {
  currentIndex = (currentIndex + 1) % myImg.length;
  showDialogImage(currentIndex);
}
