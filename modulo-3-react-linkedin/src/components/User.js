import React from 'react';

function User(props) {
    return (
        <>
            <div className="user-image__frame">
                <img src={props.imageurl} alt="user image" />
            </div>
            <div className="user-name__frame">
                <h1>{`${props.name} ${props.surname}`}</h1>
            </div>
            <div className="user-data__frame">
                <h2>{props.gender}</h2>
                <h2>{props.city}</h2>
            </div>
        </>
    );
}

export default User;