import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import '../stylesheets/App.css';

const emails = [
    {
        from: 'Front fest',
        subject: 'Entradas ya a la venta',
        time: '15:27',
    },
    {
        from: 'Github',
        subject: 'Vulnerability high',
        time: '16:00',
    },
    {
        from: 'Mamá',
        subject: '¿Qué tal el curso?',
        time: '21:45',
    },
];

class App extends React.Component {
    deleteEmail(emailId, foo, faa) {
        console.log('Borrando email', emailId, foo, faa);
    }

    render() {
        return (
            <div>
                <Header />
                <EmailList emails={emails} />
                <EmailReader
                    username="maricarmen"
                    deleteEmail={this.deleteEmail}
                />
            </div>
        );
    }
}

export default App;
