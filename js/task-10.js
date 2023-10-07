const divBox = document.querySelector('#boxes')
const controls = document.querySelector('#controls')
const userInput = controls.querySelector('input')
const createBtn = controls.querySelector('[data-create]')
const destroyBtn = controls.querySelector('[data-destroy]')
createBtn.addEventListener('click', addElem)
destroyBtn.addEventListener('click', destroyBoxes)
function addElem() {
  createBoxes(userInput.valueAsNumber)
}
function destroyBoxes() {
  return divBox.innerHTML = ''
}

function createBoxes(amount) {
  let count = [];
  let size = 30
  for (let i = 1; i <= amount; i++) {
    count.push(`<div class="${"box" + [i]}" style="background-color: ${getRandomHexColor()};width:${size + "px"}; height:${size + "px"} "></div>\n`);
    size += 10;
  }
  return divBox.insertAdjacentHTML('afterbegin', count.join(''));
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
