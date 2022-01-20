import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        // props.setCategories( cats => [...cats, inputValue] );
        if(inputValue.trim().length > 0){
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue("");
        }
    };

    return (
        <form onSubmit= { handleInputSubmit }>
         <input 
            type="text" 
            value={inputValue}
            onChange={ handleInputChange }
         />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}