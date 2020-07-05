'use strict';

const divWithText = document.querySelector('.container');
function setBackgroundColor() {
    if (window.scrollY < 250) {
        divWithText.classList.add('menos--de--250');
        divWithText.classList.remove('mas--de--250');
    } else {
        divWithText.classList.add('mas--de--250');
        divWithText.classList.remove('menos--de--250');
    }
}
window.addEventListener('scroll', setBackgroundColor);
