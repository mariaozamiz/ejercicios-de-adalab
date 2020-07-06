'use strict';

const radioButtonLight = document.getElementById('light');
const radioButtonDark = document.getElementById('dark');
const title = document.querySelector('.js__title');
const parragraphs = document.querySelectorAll('.js__paragraphs');

function applyLightTheme() {
    // if (radioButtonLight.value) {
    title.classList.add('light');
}

radioButtonLight.addEventListener('change', applyLightTheme());
