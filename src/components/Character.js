import React from 'react';

const Character = props => {
    return (<React.Fragment>
        <img className='character__image' src={props.img} alt={props.name}/>
        <span className='character__info bold'>{props.name}</span>
        <span className='character__info'>{props.species}</span>
    </React.Fragment>)
}
export default Character;