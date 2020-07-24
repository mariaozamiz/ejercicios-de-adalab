import React from 'react';
import heart from '../images/heart-solid.svg';
import user from '../images/marielle.png';
import '../stylesheets/App.css';

function App() {
    const header = (
        <header className="App-header">
            <img src={user} className="User-image" alt="user" />
            <div className="header-text">
                <h1 className="User-name">Marielle Franco</h1>
                <h2 className="Date">Lunes 26 de junio de 2016</h2>
            </div>
        </header>
    );

    const main = (
        <main>
            <p>
                O mandato de uma mulher negra, favelada, periférica, precisa
                estar pautado junto aos movimentos sociais, junto à sociedade
                civil organizada, junto a quem está fazendo para nos fortalecer
                naquele lugar onde a gente objetivamente não se reconhece, não
                se encontra, não se vê.
            </p>
        </main>
    );

    const footer = (
        <footer className="App-footer">
            <span>Leer más...</span>
            <div className="likes">
                <span>37</span>
                <img src={heart} className="heart-icon" alt="likes" />
            </div>
        </footer>
    );

    const appCard = (
        <div className="App">
            {header}
            {main}
            {footer}
        </div>
    );

    return appCard;
}

export default App;
