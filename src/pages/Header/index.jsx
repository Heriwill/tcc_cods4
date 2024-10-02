import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <img src="../images/logo.jpeg" alt="Logo PowerFlex" id='logoimg' />
                <Link to="/" className="logo">PowerFlex</Link>
                <nav className="nav-links">
                    <Link to="/" className="nav-item">Home</Link>
                    <span className="separator">|</span>
                    <Link to="/listausuario" className="nav-item">Agenda</Link>
                    <span className="separator">|</span>
                    <Link to="/login" className="nav-item">Login</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
