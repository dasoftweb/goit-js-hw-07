const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const proceedName = () => {
  if (nameInputRef.value) return nameOutputRef.textContent = nameInputRef.value;
  nameOutputRef.textContent = "незнакомец";
};

nameInputRef.addEventListener("input", proceedName);
