import './header.css';
import { Link } from 'react-router-dom'

function Header(){
    
    return(
            <header>
                <a href="/" className="logo">PowerFlex Academy</a>
                <a href="/usuario" className="usuario">Cadastrar Usuário</a>
                <a href="/listausuario" className="usuario">ListaUsuário</a>
                <a href="/funcionario" className="funcionario">Funcionário</a>
            </header>

    )

}

export default Header;

