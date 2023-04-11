import './Aside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export const Aside = ({ addedCharacters, setAddedCharacters, ids, setIds }) => {
  console.log(addedCharacters);

  useEffect(() => {
    const storedCharacters = JSON.parse(window.sessionStorage.getItem('addedCharacters'));
    if (storedCharacters && storedCharacters.length) {
      setAddedCharacters(storedCharacters);
    } 
    const storedIds = JSON.parse(window.sessionStorage.getItem('ids'));
    if (storedIds && storedIds.length) {
      setIds(storedIds);
    } else {
      setIds([]);
    }
  }, [setAddedCharacters, setIds]);
  ;

  const onRemoveCharacter = (id) => {
    const filteredCharacters = addedCharacters.filter((addedCharacter) => addedCharacter.id !== id);
    setAddedCharacters(filteredCharacters);
    const filteredIds = ids.filter((addedId) => addedId !== id);
    setIds(filteredIds);
    window.sessionStorage.setItem('addedCharacters', JSON.stringify(filteredCharacters));
    window.sessionStorage.setItem('ids', JSON.stringify(filteredIds));
  };
  
  return (
    <div className='aside'>
      {addedCharacters.map((element, index) => (
        <div key={element.id + index} className='aside-box'>
          <img src={element.img.img} alt={element.characterName.name} />
          <div className='name'>
            <h2>{element.characterName.name}</h2>
          </div>
          <button onClick={() => onRemoveCharacter(element.id)}>
            <FontAwesomeIcon icon={faTrashAlt} size='3x' style={{ color: 'black' }} />
          </button>
        </div>
      ))}
    </div>
  );
};




