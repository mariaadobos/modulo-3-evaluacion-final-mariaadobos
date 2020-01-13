import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';


const CharactersList = props => {
    return <ul className='list'>
        {props.allCharacters
        .filter(character => props.query==='' || character.name.toLowerCase().includes(props.query))
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
export default CharactersList;