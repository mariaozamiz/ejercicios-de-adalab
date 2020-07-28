import React, { useState } from 'react';
import Card from './Card';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        text: '',
        language: '',
    });

    const handleData = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    };

    return (
        <>
            <form className="form">
                <input type="text" name="name" onKeyUp={handleData} />
                <textarea type="text" name="text" onKeyUp={handleData} />
                <select name="language" onChange={handleData}>
                    <option value="Spanish">Español</option>
                    <option value="English">Inglés</option>
                    <option value="Portuguese">Portugués</option>
                </select>
            </form>
            <Card cardData={formData} />
        </>
    );
}

// function Form() {
//     const [name, setName] = useState('');
//     const [text, setText] = useState('');
//     const [language, setLanguage] = useState('');

//     const handleInput = (event) => {
//         setName({ name: event.target.value });
//         console.log(name);
//         console.log(event.target.value);
//     };

//     const handleText = (event) => {
//         setText({ text: event.target.value });
//         console.log(text);
//         console.log(event.target.value);
//     };

//     const handleLanguage = (event) => {
//         setLanguage({ language: event.target.value });
//         console.log(language);
//         console.log(event.target.value);
//     };

//     return (
//         <>
//             <form className="form">
//                 <input type="text" onKeyUp={handleInput} />
//                 <textarea type="text" onKeyUp={handleText} />
//                 <select name="languages" onChange={handleLanguage}>
//                     <option value="Spanish">Español</option>
//                     <option value="English">Inglés</option>
//                     <option value="Portuguese">Portugués</option>
//                 </select>
//             </form>
//             <Card />
//         </>
//     );
// }

export default Form;
