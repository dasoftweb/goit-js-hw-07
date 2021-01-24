const fontSizeInputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");
fontSizeInputRef.setAttribute("value", 12);
fontSizeInputRef.setAttribute("min", 12);
fontSizeInputRef.setAttribute("max", 48);

const changeFontSize = () => {
    spanTextRef.style.fontSize = `${fontSizeInputRef.value}px`;
    //spanTextRef.setAttribute("style", `font-size: ${fontSizeInputRef.value}px`);
};

fontSizeInputRef.addEventListener("input", changeFontSize);
