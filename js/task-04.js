let counterValue = 0;

const increment = () => {
  valueRef.textContent = counterValue += 1;
}

const decrement = () => {
  valueRef.textContent = counterValue -= 1;
}

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");
decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);

// VAR 2

// const valueRef = document.querySelector("#value");
// let counterValue = Number(valueRef.textContent);
// const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
// const incrementBtnRef = document.querySelector('button[data-action="increment"]');

// decrementBtnRef.addEventListener("click", function () {valueRef.textContent = counterValue -= 1;});
// incrementBtnRef.addEventListener("click", function () {valueRef.textContent = counterValue += 1;});
