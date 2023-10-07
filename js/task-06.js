const userInput = document.querySelector('#validation-input');
const valueNumber = Number(userInput.dataset.length);
userInput.addEventListener('blur', addClass);
function addClass(event) {
    if (event.currentTarget.value.length === valueNumber) {
        userInput.classList.remove("invalid");
        userInput.classList.add("valid");
    } else {
        userInput.classList.add("invalid");
    }
};