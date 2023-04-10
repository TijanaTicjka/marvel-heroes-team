import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './SingleCharacter.css';

export const SingleCharacter = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();
  console.log(hero);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=28f6359f5b4f28caadd97f5b833f6fe6`)
      .then(response => response.json())
      .then(data => {
        setHero(data.data.results[0]);
      });
  }, [id]);

  return (
    <div className="character-div">
        <div className="info-box">
            <div className="photo">
                <img src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt={hero.name}></img>
            </div>
            <div className="description">
                <h1>{hero.name}</h1>
                <p>{hero.description}</p>
            </div>
        </div>
    </div>
  );
};

