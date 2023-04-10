import './Layout.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router';

export const Layout = () => {

  return (
    <div className='layout'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}