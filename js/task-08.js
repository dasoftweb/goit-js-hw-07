const boxesInputRef = document.querySelector("#controls input");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesOutputRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  destroyBoxes();

  for (let i = 0, boxsize = 30; i < amount; boxsize += 10, i += 1) {
    let boxesHTML = `<div style="width: ${boxsize}px; height: ${boxsize}px; background-color: ${getRandomColor()}"></div>`;
    boxesOutputRef.insertAdjacentHTML("beforeend", boxesHTML);
  }

  function getRandomColor() {
    const r = () => (Math.random() * 256) >> 0;
    const color = `rgb(${r()}, ${r()}, ${r()})`;
    return color;
  }
};

const destroyBoxes = () => {
  boxesOutputRef.innerHTML = "";
};

renderBtnRef.addEventListener("click", () => {
  createBoxes(boxesInputRef.value);
});

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
});

//onclick VS addEventListener

// renderBtnRef.onclick = function () {
//   createBoxes(boxesInputRef.value);
// };

// destroyBtnRef.onclick = function () {
//   destroyBoxes();
// };

//getRandomColor HEX

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i += 1) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
