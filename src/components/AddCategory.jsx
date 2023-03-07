import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState([]);
    const onInputChange = ({ target }) => {
        // console.log(target.value)    ;
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.toString().trim().length <= 1) return;

        // setCategories(oldCategories => [inputValue, ...oldCategories]);
        setInputValue('');
        onNewCategory(inputValue.toString().trim());
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


