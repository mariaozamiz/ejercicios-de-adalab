import React from 'react';
import Mediacard from './Mediacard.js';
import heart from '../images/heart-solid.svg';
import mary from '../images/mary.jpg';
import rosalia from '../images/rosalia.jpg';
import emilia from '../images/emilia.jpeg';

function MediaList() {
    return (
        <main className="cards-list">
            <h1>Feed feminista vintage</h1>
            <ul>
                <li className="App">
                    <Mediacard
                        username="Mary Wollstonecraft"
                        date="Lunes 26 de junio de 1792"
                        image={mary}
                        text="A las mujeres, cuando se las ha despojado de las virtudes que visten a la humanidad, se las ha engalanado con gracias artificiales; su única ambición es ser hermosa para suscitar emociones en vez de inspirar respeto; y este deseo innoble, igual que el servilismo en las monarquías absolutas, destruye toda fortaleza de carácter."
                        likes={6337}
                        filledHeart={heart}
                    />
                </li>
                <li className="App">
                    <Mediacard
                        username="Rosalía de Castro"
                        date="Miércoles 2 de enero de 1867"
                        image={rosalia}
                        text="Venid ahora vosotras, esclavas mías, hermosas hijas del libre pensamiento, que lucháis por romper unas cadenas que sólo desata la muerte; valientes amazonas que no vaciláis en medir vuestras fuerzas con el gigante invisible que os vence…"
                        likes={3337}
                        filledHeart={heart}
                    />
                </li>
                <li className="App">
                    <Mediacard
                        username="Emilia Pardo Bazán"
                        date="Lunes 26 de junio de 1792"
                        image={emilia}
                        text="La educación de la mujer no puede llamarse tal educación, sino doma, pues se propone por fin la obediencia, la pasividad y la sumisión."
                        likes={4337}
                        filledHeart={heart}
                    />
                </li>
            </ul>
        </main>
    );
}

export default MediaList;
