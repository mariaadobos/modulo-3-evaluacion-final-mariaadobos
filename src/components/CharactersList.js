import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharactersList = props => {
    const {allCharacters, query} = props;
    return <ul className='list'>
        {allCharacters
        .filter(character => query==='' || character.name.toLowerCase().includes(query))
        .map(character => {
            return <Link to={`/details/${character.id}`}>
                <li key={character.id} className='character'>
                <Character 
                img = {character.image}
                name= {character.name}
                species = {character.species}
                />
                </li>
            </Link>
        })}
    </ul>
}
CharactersList.propType = {
    allCharacters: PropTypes.array,
    query: PropTypes.string
}
export default CharactersList;