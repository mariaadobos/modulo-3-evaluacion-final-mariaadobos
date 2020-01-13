import React from 'react';

const Character = props => {
    return (<React.Fragment>
        <img src={props.img} alt={props.name}/>
        <span>{props.name}</span>
        <span>{props.species}</span>
    </React.Fragment>)
}
export default Character;