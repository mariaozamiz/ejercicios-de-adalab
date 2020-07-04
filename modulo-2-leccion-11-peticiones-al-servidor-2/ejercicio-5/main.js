'use strict';

const radioFields = document.querySelectorAll('.js__theme');
const textElements = document.querySelectorAll('.js__text');

function applyTheme() {
    console.log(radioField1);
    console.log(radioField2);
    console.log(textElements);
    if (radioField1.value) {
        textElements.classList.add('light');
    } else {
        for (element of textElements) {
            console.log(element);
            classList.add('dark');
        }
    }
}

radioFields.addEventListener('click', applyTheme());
