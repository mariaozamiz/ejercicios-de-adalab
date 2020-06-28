'use strict';

//SELECTORS
const userNameField = document.querySelector('.js-user-name');
const userPasswordField = document.querySelector('.js-user-password');
const loginButton = document.querySelector('.js-login-button');
const hiddenDiv = document.getElementById('error-wrapper');

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
    name: 'front23',
    password: 'bicicleta',
};

//FUNCTIONS

function checkInfo() {
    const userNameIntroduced = userNameField.value;
    const userPasswordIntroduced = userPasswordField.value;
    if (
        userNameIntroduced === userInfo.name &&
        userPasswordIntroduced === userInfo.password
    ) {
        alert('Estás dentro');
    } else {
        attemps++;
        hiddenDiv.classList.remove('hidden');
        if (attemps === 3) {
            alert('Estás bloqueado');
        }
    }
}

//LISTENERS
loginButton.addEventListener('click', checkInfo);
