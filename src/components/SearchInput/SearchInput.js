import './SearchInput.css';
import { useState } from 'react';

export const SearchInput = ({setStr}) => {
    const[search, setSearch] = useState('');
  
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    const handleSearch = () => {
       setStr(search)
    }
    return (
        <div className='main-box'>
            <div className='search-box'>
                <input  type='text' className='search-input' placeholder='Type to search...' value={search} onChange={handleChange} />
                <button className='search-button' onClick={handleSearch}>Search</button>
            </div>
            <div className='my-team'>My Team</div>
        </div>
    )
}