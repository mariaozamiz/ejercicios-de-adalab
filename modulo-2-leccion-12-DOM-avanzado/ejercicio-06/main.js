'use strict';

const paragraphContainer = document.querySelector('.container');

function writeChalkboard() {
    for (let i = 0; i <= 100; i++) {
        paragraphContainer.innerHTML += 'Hola ke asee';
        let newItem = document.createElement('li');
        newItem.appendChild(newContent);
        const newContent = document.createTextNode('He aprendido bien cómo funcionan los bucles');
        const text = document.createTextNode(
            
        );
        // elementParagraph.appendChild(text);
        // elementParagraph.appendChild(textElement);
    }
}

console.log(writeChalkboard());
