const body = document.querySelector("body");
const colorBox = body.querySelector(".widget");
const btnChengeColor = body.querySelector('.change-color');
const text = body.querySelector('.color')
btnChengeColor.addEventListener('click', onBtn)
function onBtn(event) {
  event.preventDefault();
  const colorChenge = getRandomHexColor()
  body.style.backgroundColor = colorChenge;
  text.style.color = colorChenge;
  text.textContent = body.style.backgroundColor;
  text.style.backgroundColor = '#ffffff';
  text.style.borderRadius = '5px';
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

