import React from 'react';

function Card(props) {
    console.log(props);
    return (
        <>
            <h3>{`Aquí el nombre:${props.cardData.name}`}</h3>
            <h3>{`Aquí el nombre:${props.cardData.text}`}</h3>
            <h3>{`Aquí el nombre:${props.cardData.language}`}</h3>
        </>
    );
}

export default Card;
