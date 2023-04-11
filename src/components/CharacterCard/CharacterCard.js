import './CharacterCard.css';
import { useNavigate } from 'react-router';

export const CharacterCard = ({ id, name, img, addedCharacters, setAddedCharacters, ids, setIds }) => {
  const navigate = useNavigate();

  const addOnList = (id, name, img) => {
    const res = ids.includes(id);
    if (!res && ids.length <= 20) {
      setIds(prevIds => [...prevIds, id]);
      setAddedCharacters(prevCharacters => [
        ...prevCharacters,
        {
          characterName: { name },
          img: { img },
          id: id
        }
      ]);
      // Set addedCharacters and ids arrays in session storage
      window.sessionStorage.setItem('addedCharacters', JSON.stringify([...addedCharacters, { characterName: { name }, img: { img }, id: id }]));
      window.sessionStorage.setItem('ids', JSON.stringify([...ids, id]));
    }
  };

  return (
    <div className='character'>
      <div className='title'><h3>{name}</h3></div>
      <div className='image'>
        <img
          src={img}
          alt={name}
        />
      </div>
      <div className='button-box'>
        <button className='dynamic-button' onClick={() => navigate(`/characters/${id}`)}>Info</button>
        <button className='dynamic-button' onClick={() => addOnList(id, name, img)}>Add</button>
      </div>
    </div>
  )
}
