import { useEffect, useState } from 'react';
import './MainContent.css';

export const MainContent = ({ setAddedCharacters, str, ids, setIds}) => {

    const [characters, setCharacters] = useState([]);
    let url = "";
    useEffect(()=> {
        if(!str) {
              url = 'http://gateway.marvel.com/v1/public/characters?apikey=28f6359f5b4f28caadd97f5b833f6fe6';

        }else {
            url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${str}&apikey=28f6359f5b4f28caadd97f5b833f6fe6&`
        }
    fetch(url).then(data => data.json()).then(
        res => {
            setCharacters(res.data.results);
        }
    )
    },[str])

    const addOnList = (event) => {
        const id = event.target.id;
        const res = ids.some(e => e == id);
        if(!res && ids.length <= 20){
           console.log(false);
           setIds(prev => {
            return [...prev,id]
           })
           const characterToAdd = characters.find((character) => character.id == id);
           if (characterToAdd) {
            setAddedCharacters((prev) => {
                return [
                    ...prev,
                    {name: characterToAdd.name,
                    thumbnail: characterToAdd.thumbnail.path + '.' + characterToAdd.thumbnail.extension,
                    id: characterToAdd.id}
                    ]
                }
            )
        }
    }};
    
    const showInfo = (event) => {
        const element = event.target.id;
    }
    
    return (
        <div className='box'>
            {characters.map((character) => (
                <div className='character' key={character.id}>
                    <div className='title'><h3>{character.name}</h3></div>
                    <div className='image'>
                        <img
                        src={character.thumbnail.path + '.' + character.thumbnail.extension}
                        alt={character.name}
                    />
                    </div>
                    <div className='button-box'>
                        <button className='dynamic-button' id={character.id} onClick={showInfo}>Info</button>
                        <button className='dynamic-button' id={character.id} onClick={addOnList}>Add</button>
                    </div>
                </div>
            ))}
        </div>
    )
}