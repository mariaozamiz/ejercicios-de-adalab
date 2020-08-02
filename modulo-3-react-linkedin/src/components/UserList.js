import React from 'react';
import User from './User';


function UserList(props) {
    
    const usersinfo = props.users.map((user, index) => {
        return (
            <li key={index} className="user-card">
                <User
                    imageurl={user.image}
                    name={user.name}
                    surname={user.surname}
                    gender={user.gender}
                    city={user.city}
                    age={user.age}
                />
            </li>
        );
    });
    return <ul className="user-list">{usersinfo}</ul>;
}

export default UserList;