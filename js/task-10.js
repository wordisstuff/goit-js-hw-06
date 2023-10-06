//Напиши скрипт створення і очищення колекції елементів.
//Користувач вводить кількість елементів в input і натискає 
//кнопку Створити, після чого рендериться колекція.
//Натисненням на кнопку Очистити, колекція елементів очищається.

{/* < div id = "controls" >
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</ >

  <div id="boxes"></div> */}
// console.dir(divBox);

// destroyBoxes()
//Створи функцію createBoxes(amount), яка приймає один параметр - число.
//Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого < div > - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.
//Використовуй готову функцію getRandomHexColor для отримання кольору.
//Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.
const divBox = document.querySelector('#boxes')
const controls = document.querySelector('#controls')
const userInput = controls.querySelector('input')
const createBtn = controls.querySelector('[data-create]')
const destroyBtn = controls.querySelector('[data-destroy]')
createBtn.addEventListener('click', addElem)
destroyBtn.addEventListener('click', destroyBoxes)
// console.dir(userInput.valueAsNumber);
function addElem() {
  createBoxes(userInput.valueAsNumber)
}

// createBoxes(5);

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
