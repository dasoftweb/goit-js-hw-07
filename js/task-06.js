const validationInputRef = document.querySelector("#validation-input");
const dataLengthRef = validationInputRef.getAttribute("data-length");

const validate = () => {
  if (validationInputRef.value.length > Number(dataLengthRef) - 1) {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
  } else {
    validationInputRef.classList.remove("valid");
    validationInputRef.classList.add("invalid");
  }
};

validationInputRef.addEventListener("blur", validate);
