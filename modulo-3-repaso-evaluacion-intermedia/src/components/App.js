import React, { useState } from 'react';
import '../stylesheets/App.css';
import ClubList from './ClubList';
import clubsFromApi from '../data/clubs.json';

function App() {
    const [clubs, setClubs] = useState(clubsFromApi);
    return (
        <div className="clubs-container">
            {' '}
            <ClubList clubs={clubs} />
        </div>
    );
}

export default App;
