import { useEffect, useState } from 'react';
import './MainPage.css';
import { SearchInput } from '../SearchInput/SearchInput';

export const MainPage = ({ setAddedCharacters}) => {
    const [characters, setCharacters] = useState([]);
    const addOnList = (event) => {
        const id = event.target.id;
        const characterToAdd = characters.find((character) => character.id == id);
        if (characterToAdd) {
            setAddedCharacters((prev) => {
                return [
                    ...prev,
                    {name: characterToAdd.name,
                    thumbnail: characterToAdd.thumbnail.path + '.' + characterToAdd.thumbnail.extension}
                    ]
                }
            )
        }
    };
    


    const showInfo = (event) => {
        const element = event.target.id;
   

    }

    useEffect(()=> {
        fetch('http://gateway.marvel.com/v1/public/characters?apikey=abcbe5dadf453a1ee9788a4c634b3011').then(data => data.json()).then(
            res => {
                console.log(res.data.results)
                setCharacters(res.data.results);
                console.log(characters);
            }
        )
    },[])
    return (
    <div className='m'>
    <SearchInput></SearchInput>
      <div className='box'>
            {characters.map((character) => (
                <div className='character' key={characters.id}>
                    <div className='title'><p>{character.name}</p></div>
                    <div className='image'>
                        <img
                        src={character.thumbnail.path + '.' + character.thumbnail.extension}
                        alt={character.name}
                    />
                    </div>
                    <div className='button-box'>
                     <button id={character.id} onClick={showInfo}>Info</button>
                     <button id={character.id} onClick={addOnList}>Add</button>
                     </div>
                </div>
            ))}
        </div>
        </div>
    )
   
}
