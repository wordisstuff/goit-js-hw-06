const div = document.querySelector('#counter');
const counterValue = div.querySelector('#value');
const incBtn = div.querySelector("[data-action = increment]");
const decBtn = div.querySelector("[data-action = decrement]");
incBtn.addEventListener("click", () => counterValue.textContent++);
decBtn.addEventListener("click", () => counterValue.textContent--);