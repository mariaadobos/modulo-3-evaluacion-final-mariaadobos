import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import human from '../images/human.png';
import alien from '../images/alien.png';
import alive from '../images/alive.png';
import dead from '../images/dead.png';

const Details = props => {
    const {name, image, species, status} = props.characterDetails;
    return <div className='details-container'>
        <Link className='back' to='/'>
            <span ><i className="fas fa-chevron-left"></i>Volver</span>
        </Link>
        <div className='character-details'>
        <img className='character-details__img' src={image} alt={name}/>
        <div className='character-details__description'>
            <span className='character-details__description__name bold'>{name}</span>
            <div>
                {species==='Human' ? <img className='icon' title='Human' src={human} alt='human'/> : <img className='icon' title='Alien' src={alien} alt='alien'/>}
                {status==='Alive' ? <img className='icon' title='Alive' src={alive} alt='alive'/> : status==='Dead' ? <img className='icon' title='Dead' src={dead} alt='dead'/> : <p>{`Status: ${status}`}</p>}
            </div>
        </div>
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