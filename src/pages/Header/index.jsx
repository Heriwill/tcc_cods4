//<a href="/listausuario" className="usuario">ListaUsuário</a> 
import './header.css';
import { Link } from 'react-router-dom'
function Header(){
    
    return(
            <header>
                <img src="../images/logo.jpeg" alt="" id='logoimg' />
                <a href="/" className="logo">PowerFlex Academy</a>
                <a href="/login" className="login">Login</a>
                <a href="/usuario" className="usuario">Cadastrar Usuário</a>
                <a href="/listausuario" className="usuario">ListaUsuário</a>
            </header>

    )

}

export default Header;

