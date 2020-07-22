import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';

const emails = [
  {
    subject: 'Entradas ya a la venta',
    time: '15:27'
  },
  {
    from: 'GitHub',
    subject: 'Adalab/project-promo-i Local store #23',
    time: '16:00'
  },
  {
    from: 'Node Weekly',
    subject: 'Node news',
    time: '21:45'
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <EmailList emails={emails} />
        <EmailReader />
      </div>
    );
  }
}

export default App;
