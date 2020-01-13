import React from 'react';
import PropTypes from 'prop-types';


const Character = props => {
    const {name, img, species} = props
    return (<React.Fragment>
        <img className='character__image' src={img} alt={name}/>
        <span className='character__info bold'>{name}</span>
        <span className='character__info'>{species}</span>
    </React.Fragment>)
}
Character.propTypes = {
    name:PropTypes.string,
    img: PropTypes.string,
    species: PropTypes.string
}
export default Character;