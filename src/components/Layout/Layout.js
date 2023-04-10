import './Layout.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
// import { useState } from "react";
// import { useEffect } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
//   const [addedCharacters, setAddedCharacters] = useState([]);
//   const [str, setStr] = useState('');
//   const [ids, setIds] = useState([]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     const scrollTop = window.pageYOffset;
//     if (scrollTop === 0) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   };


//   const handleSend =(searchTerm) => {
//     setStr(searchTerm);
//   }
  return (
    <div className='layout'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}