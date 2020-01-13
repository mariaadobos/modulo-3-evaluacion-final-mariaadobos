import React from 'react';

const Search = props =>{
    const getInputValue = event => {
        props.getInputValue(event.target.value)
    }
    const onSubmitHandler = event => {
        event.preventDefault()
    };
    return <form onSubmit={onSubmitHandler}>
        <input type='text' placeholder='Busca un personaje' value={props.value} onChange={getInputValue}/>
    </form>
}
export default Search;