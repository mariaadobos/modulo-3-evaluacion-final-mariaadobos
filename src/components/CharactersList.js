import React from 'react';
import Character from './Character'

const CharactersList = props => {
    return <ul>
        {props.allCharacters.map(character => {
            return <li key={character.id}>
                <Character 
                img = {character.image}
                name= {character.name}
                species = {character.species}
                />
            </li>
        })}
    </ul>
}
export default CharactersList;