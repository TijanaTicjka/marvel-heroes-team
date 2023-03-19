import './App.css';
import { Route, Routes, Navigate } from 'react-router';
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';
import {SearchInput} from './components/SearchInput/SearchInput';
import {Aside} from './components/Aside/Aside';
import { useState } from "react";

function App() {
  const [addedCharacters, setAddedCharacters] = useState([]);
  return (
    <div className='App'>
      <Header/>
      <div className='main-container'>
        <MainPage setAddedCharacters={setAddedCharacters}></MainPage>
        <Aside addedCharacters={addedCharacters}></Aside>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
