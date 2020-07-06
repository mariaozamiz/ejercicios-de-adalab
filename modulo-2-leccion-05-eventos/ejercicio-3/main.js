'use strict';

const paragraph2 = document.querySelector('.p--2');

function duplicateText() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
    nemo in consequatur sint atque, aliquid accusamus recusandae tempora
    alias corrupti consectetur nulla. Deleniti repellendus at excepturi
    nemo et, cupiditate beatae!`;
    paragraph2.insertAdjacentElement('afterend', newParagraph);
}

paragraph2.addEventListener('mouseover', duplicateText);
