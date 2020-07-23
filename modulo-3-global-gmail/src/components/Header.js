import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleInboxClick = this.handleInboxClick.bind(this);
    }

    handleInboxClick(ev) {
        ev.preventDefault();
        console.log('Me han clicado es', ev.target);
    }

    render() {
        return (
            <header className="col2 mb-1">
                <div>
                    <h1 className="title">
                        <span className="fas fa-envelope-open-text"></span>
                        Gmail
                    </h1>
                </div>

                <form className="text-align-right">
                    <button
                        id="inbox"
                        className="form__btn"
                        onClick={this.handleInboxClick}
                    >
                        <span className="fas fa-inbox"></span>
                        Recibidos
                    </button>
                    <button
                        id="trash"
                        className="form__btn"
                        onClick={this.handleInboxClick}
                    >
                        <span className="fas fa-trash"></span>
                        Papelera
                    </button>
                    <input
                        className="form__input-text"
                        type="text"
                        placeholder="Buscar un correo"
                    />
                </form>
            </header>
        );
    }
}

export default Header;
