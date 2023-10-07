const userInput = document.querySelector("#font-size-control");
const text = document.querySelector('#text');
userInput.addEventListener("input", pullBtn);
function pullBtn(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};