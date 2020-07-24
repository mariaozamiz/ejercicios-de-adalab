import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import '../stylesheets/App.css';

const emails = [
    {
        id: 'id-1',
        from: 'Front fest',
        subject: 'Entradas ya a la venta',
        time: '15:27',
    },
    {
        id: 'id-2',
        from: 'Github',
        subject: 'Vulnerability high',
        time: '16:00',
    },
    {
        id: 'id-3',
        from: 'Mamá',
        subject: '¿Qué tal el curso?',
        time: '21:45',
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            emails: [
                {
                    id: 'id-1',
                    from: 'Front fest',
                    subject: 'Entradas ya a la venta',
                    time: '15:27',
                },
                {
                    id: 'id-2',
                    from: 'Github',
                    subject: 'Vulnerability high',
                    time: '16:00',
                },
                {
                    id: 'id-3',
                    from: 'Mamá',
                    subject: '¿Qué tal el curso?',
                    time: '21:45',
                },
            ],
        };
    }

    changeFilterText(text) {
        this.setState({
            filterText: text,
        });
    }

    removeEmail(emailId) {
        console.log('Borrando email', emailId);
    }

    render() {
        const filteredEmails = this.state.emails.filter((email) => {
            return email.subject.includes(this.state.filterText);
        }); // hacer que filtre por mayusculas y minúsculas

        return (
            <div>
                <Header changeFilterText={this.changeFilterText} />
                <h2>Filtrando por: "{this.state.filterText}"</h2>
                <EmailList emails={filteredEmails} />
                <EmailReader
                    username="maricarmen"
                    deleteEmail={this.removeEmail}
                />
            </div>
        );
    }
}

export default App;
