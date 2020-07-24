import React from 'react';

function Mediacard(props) {
    return (
        <>
            <header className="App-header">
                <img src={props.image} className="User-image" alt="user" />
                <div className="header-text">
                    <h1 className="User-name">{props.username}</h1>
                    <h2 className="Date">{props.date}</h2>
                </div>
            </header>
            <main>
                <p>{props.text}</p>
            </main>
            <footer className="App-footer">
                <span>Leer más...</span>
                <div className="likes">
                    <span>{props.likes}</span>
                    <img
                        src={props.filledHeart}
                        className="heart-icon"
                        alt="likes"
                    />
                </div>
            </footer>
        </>
    );
}

export default Mediacard;
