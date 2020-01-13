import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';


const CharactersList = props => {
    return <ul>
        {props.allCharacters
        .filter(character => props.query==='' || character.name.toLowerCase().includes(props.query))
        .map(character => {
            return <Link to={`/details/${character.id}`}>
                <li key={character.id}>
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