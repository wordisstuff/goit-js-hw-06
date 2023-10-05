const div = document.querySelector('#counter')
const counterValue = div.querySelector('#value');
// let counter = 0;
const incBtn = div.querySelector("[data-action = increment]")
const decBtn = div.querySelector("[data-action = decrement]")
// console.dir(increment);
incBtn.addEventListener("click", () => counterValue.textContent++);
decBtn.addEventListener("click", () => counterValue.textContent--);

// decBtn.addEventListener("click", downClick)
// incBtn.addEventListener("click", upClick)
// decBtn.addEventListener("click", downClick)
// function downClick(event) {
//     return counterValue.textContent = counter--;
// };
// function upClick(event) {
//     return counterValue.textContent = counter++;
// };

// Створи змінну counterValue, 
//в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
