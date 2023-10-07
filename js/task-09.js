const body = document.querySelector("body");
const colorBox = body.querySelector(".widget");
const btnChengeColor = body.querySelector('.change-color');
const text = body.querySelector('.color')
btnChengeColor.addEventListener('click', onBtn)
function onBtn(event) {
  event.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = body.style.backgroundColor;
  text.style.color = getRandomHexColor();
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

