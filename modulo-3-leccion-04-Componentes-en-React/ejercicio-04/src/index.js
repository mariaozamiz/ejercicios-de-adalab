import React from 'react';
import ReactDOM from 'react';
import './index.css';
import PropTypes from 'prop-types';

const arrayOfItems = [
    {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5,
    },
    {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15,
    },
    {
        name: 'Agua mineral',
        quantity: 2,
        category: 'Bebida',
        price: 5,
    },
    {
        name: '',
        description: 'Bebida de soja ecológica',
        quantity: 1,
        category: 'Fast-food',
        price: 9,
    },
];

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                <h5 className="quantity">{this.props.quantity}</h5>
                <div>
                    <h5>{this.props.name}</h5>
                    <h6 className="text-muted">{this.props.description}</h6>
                </div>
                <div className="badge badge-info">{this.props.category}</div>
                <h5 className="price">{this.props.price}€</h5>
            </div>
        );
    }
}

Item.propTypes = {
    name: PropTypes.isRequired,
    price: PropTypes.number.isRequired,
};

Item.defaultProps = {
    description: 'No hay descripción',
};

class ItemList extends React.Component {
    render() {
        return (
            <ul className="item-list">
                {this.props.items
                    .filter((item) => item.price < 10)
                    .map((item) => {
                        return (
                            <li>
                                <Item
                                    name={item.name}
                                    description={item.description}
                                    quantity={item.quantity}
                                    category={item.category}
                                    price={item.price}
                                />
                            </li>
                        );
                    })}
            </ul>
        );
    }
}

ReactDOM.render(
    <ItemList items={arrayOfItems} />,
    document.getElementById('react-root')
);
