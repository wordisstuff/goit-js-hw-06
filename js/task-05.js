//Напиши скрипт, який під час набору тексту 
//в інпуті input#name - input(подія input), 
//підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен 
//відображатися рядок "Anonymous".

const inputName = document.querySelector('#name-input');
inputName.addEventListener("input", onInput)
const output = document.querySelector('#name-output');
// console.dir(output);
function onInput(event) {
    // console.dir(inputName.currentTarget.value);
    // console.dir(event.currentTarget.value);
    if (event.currentTarget.value !== '') {
        output.textContent = event.currentTarget.value;
    } else { output.textContent = 'Anonymous' }
}



