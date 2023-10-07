const inputName = document.querySelector('#name-input');
inputName.addEventListener("input", onInput)
const output = document.querySelector('#name-output');
function onInput(event) {
    if (event.currentTarget.value !== '') {
        output.textContent = event.currentTarget.value;
    } else { output.textContent = 'Anonymous' }
}



