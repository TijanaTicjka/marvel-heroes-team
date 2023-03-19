import './Aside.css';

export const Aside = ({ addedCharacters}) => {
  return(
    <div className='aside'>
      <div><h4>My Team</h4></div>
      {addedCharacters.map((element) => (
        <div key={element.id} className='photo'>
          <img src={element.thumbnail}/>
          <p className='name'>{element.name}</p>
      </div>))}
    </div>
  )
};
