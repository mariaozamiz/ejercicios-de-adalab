import React from 'react';

class EmailItem extends React.Component {
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
                    <button className="form__btn fas fa-trash"></button>
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
