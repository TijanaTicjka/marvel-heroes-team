import './Aside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Aside = ({ addedCharacters, setAddedCharacters, ids, setIds}) => {

  const onRemoveCharacter = (id) => {
    console.log(id);
    const filtredCharacters = addedCharacters.filter((addedCharacter) => addedCharacter.id !== id)
    setAddedCharacters(filtredCharacters)
    const filtredIds = ids.filter((id) => id !== id);
    setIds(filtredIds) 
  }
  
  return (
    <div className='aside'>
      {addedCharacters.map((element, index) => (
        <div key={element.id + index} className='aside-box' >
          <img src={element.img.img} alt={element.characterName.name} />
          <div className='name'><h2>{element.characterName.name}</h2></div>
          <button onClick={() => onRemoveCharacter(element.id)}>
           <FontAwesomeIcon
            icon={faTrashAlt}
            size="3x"
            style={{ color: 'black'}}
          />  
          </button>
        </div>
      ))}
    </div>
  )
}


