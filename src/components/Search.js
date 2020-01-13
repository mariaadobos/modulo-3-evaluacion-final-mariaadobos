import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
    const getInputValue = event => {
        props.getInputValue(event.target.value)
    }
    const onSubmitHandler = event => {
        event.preventDefault()
    };
    return <form className='form' onSubmit={onSubmitHandler}>
        <input className='form__input' type='text' placeholder='★ busca un personaje aqui ★' value={props.value} onChange={getInputValue}/>
    </form>
}
Search.propTypes = {
    value: PropTypes.string
}
export default Search;