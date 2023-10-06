//Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.

{/* < input
type = "text"
id = "validation-input"
data - length="6"
placeholder = "Please enter 6 symbols"
    /> */}


//Яка кількість символів повинна бути в інпуті, зазначається в його
//атрибуті data - length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//якщо неправильна кількість - червоним.Для додавання стилів використовуй CSS - класи valid і invalid,
//які ми вже додали у вихідні файли завдання.

const userInput = document.querySelector('#validation-input');
const valueNumber = Number(userInput.dataset.length);
userInput.addEventListener('blur', addClass);
function addClass(event) {
    if (event.currentTarget.value.length === valueNumber) {
        userInput.classList.remove("invalid")
        userInput.classList.add("valid")
    } else {
        userInput.classList.add("invalid");
    }
};




// (event) => {
// return event.currentTarget.value.length === valueNumber
//     ? ("invalid" in userInput.classList ? userInput.classList.remove("invalid") : userInput.classList.add("valid"))
//     : userInput.classList.add("invalid");
// userInput.classList.add("valid") 
// : userInput.classList.remove("valid"),
// userInput.classList.add("invalid")
// }
// );

// function offInput(event) {
//version - 1
// const inputNumber = event.currentTarget.value.length;
// const valueNumber = Number(userInput.dataset.length);
// const result = (inputNumber === valueNumber) ? userInput.classList.add("valid") : userInput.classList.add("invalid")
// return result
// console.dir(event.currentTarget.value.length);
// console.dir(userInput.dataset.length);
//ver - 2
// if (event.currentTarget.value.length === Number(userInput.dataset.length)) {
//     userInput.classList.add("valid");
// } else {
//     userInput.classList.add("invalid")
// }
// };