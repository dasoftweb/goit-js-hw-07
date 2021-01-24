const boxesInputRef = document.querySelector("#controls input");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesOutputRef = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesOutputRef.innerHTML = "";

  for (let i = 0, boxsize = 30; i < amount; boxsize += 10, i += 1) {
    let boxesHTML = `<div style="background-color: ${getRandomColor()}; width: ${boxsize}px; height: ${boxsize}px"></div>`;
    boxesOutputRef.insertAdjacentHTML("beforeend", boxesHTML);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

function destroyBoxes() {
  boxesOutputRef.innerHTML = "";
}

renderBtnRef.onclick = function (evt) {
  evt.preventDefault();
  createBoxes(boxesInputRef.value);
};

destroyBtnRef.onclick = function (evt) {
  evt.preventDefault();
  destroyBoxes();
};
