import React from 'react';
import Club from './Club.js';

function ClubList(props) {
    const items = props.clubs.map((club, index) => {
        return (
            <li key={index}>
                <Club name={club.name} fa={club.fa} members={club.members} />;
            </li>
        );
    });

    return <ul>{items}</ul>;
}

export default ClubList;
