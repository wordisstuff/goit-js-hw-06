const form = document.querySelector('.login-form')
form.addEventListener('submit', onForm);
function onForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements
    if (email.value === '' || password.value === '') {
        alert("Всі поля повинні бути заповнені!!!")
    } else {
        const userData = {
            email: email.value, password: password.value
        }
        console.log(userData);
        form.reset();
    }
};
