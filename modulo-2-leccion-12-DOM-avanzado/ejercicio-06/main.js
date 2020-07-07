'use strict';

const paragraphContainer = document.querySelector('.container');

function writeChalkboard() {
    for (let i = 0; i <= 100; i++) {
        paragraphContainer.innerHTML += 'Hola ke asee';
        let newItem = document.createElement('li');
        newItem.appendChild(newContent);
        const newContent = document.createTextNode('Item nuevo');
        const text = document.createTextNode(
            'He aprendido bien cómo funcionan los bucles'
        );
        // elementParagraph.appendChild(text);
        // elementParagraph.appendChild(textElement);
    }
}

console.log(writeChalkboard());
