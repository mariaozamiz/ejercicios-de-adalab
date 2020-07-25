import React from 'react';

class OnionHater extends React.Component {
    constructor(props) {
        super(props);
        this.isHating = false;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const formElement = document.querySelector('.form');
        if (event.target.value.includes('cebolla')) {
            this.isHating = true;
            formElement.classList.add('onion');
        } else {
            this.isHating = false;
            formElement.classList.remove('onion');
        }
        this.forceUpdate();
    }

    render() {
        return (
            <form className="form">
                <textarea
                    onChange={this.handleChange}
                    placeholder="Escribe ingredientes"
                ></textarea>
            </form>
        );
    }
}

export default OnionHater;
