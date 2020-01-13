import React from 'react';
import { Link } from 'react-router-dom';

const Details = props => {
    const {name, image, species, status, episode, origin} = props.characterDetails
    return <div>
        <Link to='/'>
            <span className='back'><i className="fas fa-arrow-left"></i>Volver</span>
        </Link>
        <div className='character'>
        <img src={image} alt={name}/>
        <span className='character__info bold'>{name}</span>
        <span className='character__info'>Species: {species}</span>
        {/*<span className='character__info'>{props.characterDetails.episode.length}</span>*/}
        <span className='character__info'>Status: {status}</span>
    </div>
    </div>
}
export default Details;