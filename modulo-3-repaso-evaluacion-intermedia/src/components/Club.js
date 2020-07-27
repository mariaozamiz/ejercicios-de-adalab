import React from 'react';

const Item = (props) => {};

class Club extends React.Component {
    render() {
        const membersLi = this.props.members.map((member, index) => {
            return <li key={index}>{member}</li>;
        });

        return (
            <div>
                <h2>{this.props.name}</h2>
                <span>{this.props.fa}</span>
                <h3>Members:</h3>
                <ul>{membersLi}</ul>
            </div>
        );
    }
}

export default Club;
