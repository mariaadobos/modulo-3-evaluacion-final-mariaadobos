import React from 'react';
import PropTypes from 'prop-types';
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
Details.propTypes = {
    name:PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string
}
export default Details;