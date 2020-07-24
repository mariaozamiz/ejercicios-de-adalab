import React from 'react';
import '../stylesheets/App.scss';
import heart from '../images/heart-solid.svg';
import user from '../images/mary.jpg';
import Mediacard from './Mediacard.js';

function App() {
    return (
        <div className="App">
            <Mediacard
                username="Mary Wollstonecraft"
                date="Lunes 26 de junio de 1792"
                image={user}
                text="A las mujeres, cuando se las ha despojado de las virtudes que visten a la humanidad, se las ha engalanado con gracias artificiales; su única ambición es ser hermosa para suscitar emociones en vez de inspirar respeto; y este deseo innoble, igual que el servilismo en las monarquías absolutas, destruye toda fortaleza de carácter."
                likes={337}
                filledHeart={heart}
            />
        </div>
    );
}

export default App;
