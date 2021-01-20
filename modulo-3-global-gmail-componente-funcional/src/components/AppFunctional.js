import React, { useState } from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import '../stylesheets/App.css';
import emailsFromApi from '../data/emails';

const App = () => {
    const [filterText, setFilterText] = useState('');
    //filterText equivale a this.state = {filterText: ''}
    //setFilterText equivale a this.setState({filter:'lo que sea});
    const [emails, setEmails] = useState(emailsFromApi);
    //email equivale a this.state = {emails: [...]}
    //setEmails equivale a this.setState({emails:[...]});

    console.log('Emails: ', emails);

    const changeFilterText = (text) => {
        setFilterText(text);
    };
    const removeEmail = (clickedEmailId) => {
        console.log('Borrando email', emails, clickedEmailId);
        const email = emails.find((email) => email.id === clickedEmailId);
        email.delete = true;
        setEmails([...emails]);
        console.log(emails);
    };
    const filteredEmails = emails
        .filter((email) => {
            return email.deleted !== false; //filtro por los no borrados
        })
        .filter((email) => {
            return email.subject.includes(filterText);
        }); // hacer que filtre por mayusculas y minúsculas

        console.log('Filtrados: ', filteredEmails);
    console.log('Renderizando...');

    return (
        <div>
            <Header changeFilterText={changeFilterText} />
            <h2>Filtrando por: "{filterText}"</h2>
            <EmailList emails={filteredEmails} deleteEmail={removeEmail} />
            <EmailReader deleteEmail={removeEmail} />
        </div>
    );
};

export default App;
