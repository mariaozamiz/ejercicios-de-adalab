'use strict';

const pageBackground = document.querySelector('body');
function changeBackgroundColor(event) {
    if (event.key === 'r') {
        pageBackground.classList.add('background__color--red');
        pageBackground.classList.remove('background__color--purple');
    } else if (event.key === 'p') {
        pageBackground.classList.add('background__color--purple');
        pageBackground.classList.remove('background__color--red');
    }
}
document.addEventListener('keydown', changeBackgroundColor);
