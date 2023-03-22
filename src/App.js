import './App.css';
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { MainContent } from './components/MainContent/MainContent';
import { SearchInput } from './components/SearchInput/SearchInput';
import {Aside} from './components/Aside/Aside';
import { useState } from "react";
import { useEffect } from 'react';

function App() {
  const [addedCharacters, setAddedCharacters] = useState([]);
  const [str, setStr] = useState('');
  const [ids, setIds] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };


  const handleSend =(searchTerm) => {
    setStr(searchTerm);
  }
  
  return (
    <div className='App'>
      <Header/>
      <SearchInput onSend={handleSend}></SearchInput>
      <div className='main-container'>
        <MainContent setAddedCharacters={setAddedCharacters} str={str} ids={ids} setIds={setIds}></MainContent>
        <Aside addedCharacters={addedCharacters} setAddedCharacters={setAddedCharacters} ids={ids} setIds={setIds}></Aside>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
