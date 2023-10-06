
//Напиши скрипт, який змінює кольори фону 
//елемента < body > через інлайн - стиль по кліку на button.change - color 
//і виводить значення кольору в span.color.

{/* < div class="widget" >
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</ > */}
//Для генерування випадкового кольору використовуй
//  функцію getRandomHexColor.
const body = document.querySelector("body");
const colorBox = body.querySelector(".widget");
const btnChengeColor = body.querySelector('.change-color');
const text = body.querySelector('.color')
// console.dir(body);
// console.dir(colorBox);
// console.dir(btnChengeColor);
// console.dir(text.textContent);
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

