import { useEffect, useState } from 'react';
import { SearchInput } from '../SearchInput/SearchInput';
import {Aside} from '../Aside/Aside';
import './MainContent.css';
import { CharacterCard } from '../CharacterCard/CharacterCard';


export const MainContent = () => {
    const [characters, setCharacters] = useState([]);
    const [str, setStr] = useState("");
    const [addedCharacters, setAddedCharacters] = useState([]);
    const [ids, setIds] = useState([]);
   
    useEffect(()=> {
        let url = "";

        if(!str) {
            url = 'http://gateway.marvel.com/v1/public/characters?apikey=28f6359f5b4f28caadd97f5b833f6fe6';

        }else{
            url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${str}&apikey=28f6359f5b4f28caadd97f5b833f6fe6&`
        }

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setCharacters(res.data.results);
            });
    },[str]);

    return (
        <div className='container'>
            <SearchInput
                setStr={setStr}
            />
            <div className='main-box'>
                <div className='box'>
                    {characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            img={character.thumbnail.path + '.' + character.thumbnail.extension}
                            ids={ids}
                            setIds={setIds}
                            characters={characters}
                            setAddedCharacters={setAddedCharacters}
                        />
                    ))}
                </div>
                <Aside
                    addedCharacters={addedCharacters}
                    setAddedCharacters={setAddedCharacters}
                    ids={ids}
                    setIds={setIds}
                />
            </div>
        </div>
    )
}
