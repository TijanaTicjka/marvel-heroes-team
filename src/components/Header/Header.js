import './Header.css';
import { useNavigate } from 'react-router';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <div className='logo'><img src="https://www.freepnglogos.com/uploads/marvel-logo-png/marvel-logo-hd-5.png" width="130" alt="marvel logo hd" onClick={() => navigate('/')} /></div>
        </header>
    )
}