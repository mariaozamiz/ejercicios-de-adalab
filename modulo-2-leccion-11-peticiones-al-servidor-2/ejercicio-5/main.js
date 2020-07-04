'use strict';

const radioFields = document.querySelectorAll('.js__theme');
const title = document.querySelector('.js__title');
const parragraphs = document.querySelectorAll('.js__paragraphs');

function applyTheme(event) {
    console.log(radioFields.value);
    if (event.currentTarget === true) {
        parragraphs.classList.add('light');
        title.classList.add('light');
    } else {
        for (const element of textElements) {
            console.log(element);
            textElements.classList.add('dark');
        }
    }
}

radioFields.addEventListener('click', applyTheme(event));
