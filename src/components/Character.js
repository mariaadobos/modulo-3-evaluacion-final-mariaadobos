import React from 'react';

const Character = props => {
    return (<React.Fragment>
        <img className='character__image' src={props.img} alt={props.name}/>
        <span className='character__name'>{props.name}</span>
        <span className='character__species'>{props.species}</span>
    </React.Fragment>)
}
export default Character;