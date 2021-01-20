import React, { useState, useEffect } from 'react';
import '../stylesheets/App.css';
import UserList from './UserList';
import getInfoFromApi from '../services/getInfoFromApi';


function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getInfoFromApi().then(results => {
            console.log(results);
            setUsers(results);
        })
    }, []);

    return (
        <div className="App">
            <UserList users={users} />
        </div>
    );
}

export default App;
