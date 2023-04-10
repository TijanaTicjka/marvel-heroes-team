import './CharacterCard.css';
import { useNavigate } from 'react-router';

export const CharacterCard = ({id, name, img, ids, setIds, setAddedCharacters}) => {
    const navigate = useNavigate();

    const addOnList = (id) => {
        const res = ids.some(e => e == id);
        console.log(res);
        if(!res && ids.length <= 20){
           console.log(false);
           setIds(prev => {
            return [...prev,id]
           })
           setAddedCharacters((prev) => {
                return [
                    ...prev,
                    {characterName:{name},
                    img: {img},
                    id: {id}}
                    ]
                }
            )
        }
    }
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
             <button className='dynamic-button' onClick={() => addOnList(id)}>Add</button>
        </div>
    </div>
   )
}