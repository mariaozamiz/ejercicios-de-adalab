import React from 'react';

class EmailItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleTrashClick = this.handleTrashClick.bind(this);
    }

    handleTrashClick() {
        console.log('me han clickado', this.props.id);
        this.props.deleteEmail(this.props.id);
    }

    render() {
        console.log(this.props);
        return (
            <tr className="cursor-pointer">
                <td>
                    <a href="/" className="text--decoration--none">
                        {this.props.from}
                    </a>
                </td>
                <td>
                    <a href="/" className="text--decoration--none">
                        {this.props.subject}
                    </a>
                </td>
                <td>
                    <a href="/" className="text--decoration--none">
                        {this.props.time}
                    </a>
                </td>
                <td className="text-align-right">
                    <button
                        className="form__btn fas fa-trash"
                        onClick={this.handleTrashClick}
                    ></button>
                </td>
            </tr>
        );
    }
}

// EmailItem.propTypes = {
//     from: propTypes.string,
// };

// EmailItem.defaultProps = {
//     from: 'remitente desconocido',
// };

export default EmailItem;
