'use strict';

const inputField = document.querySelector('.js__input');
const paragraphField = document.querySelector('.js__paragraph');

function paintAndSave() {
    let inputText = inputField.value;
    paragraphField.innerHTML = inputText;
    localStorage.setItem('text', inputText);
}

function recoverInfo() {
    const storageInfo = localStorage.getItem('text');
    inputField.value = storageInfo;
    paragraphField.innerHTML = storageInfo;
}

inputField.addEventListener('keyup', paintAndSave);
inputField.addEventListener('focus', recoverInfo);
