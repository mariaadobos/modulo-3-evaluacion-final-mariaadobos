import React from 'react';

const Details = props => {
    console.log(props)
    return <div>hola
        <img src={props.characterDetails.img} alt={props.characterDetails.name}/>
        <span>{props.characterDetails.name}</span>
        <span>{props.characterDetails.species}</span>
    </div>
}
export default Details;