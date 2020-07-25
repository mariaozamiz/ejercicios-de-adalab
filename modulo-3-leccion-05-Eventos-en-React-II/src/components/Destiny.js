import React from 'react';
import CityImage from './CityImage.js';

class Destiny extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.city = '';
    }

    handleChange(event) {
        this.city = event.target.value;
        // alert(`Tu destino es viajar a ${event.target.value}`);
        this.forceUpdate();
    }

    render() {
        return (
            <form className="form">
                <label htmlFor="cities">
                    <select onChange={this.handleChange}>
                        <option value="Buenosaires">Buenos Aires</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Praga">Praga</option>
                        <option value="Boston">Boston</option>
                        <option value="Tokio">Tokio</option>
                    </select>
                </label>
                <CityImage city={this.city} />
                <p>{`Tu destino es ${this.city}`}</p>
            </form>
        );
    }
}

export default Destiny;
