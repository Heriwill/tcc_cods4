import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Funcionario from './pages/Funcionario';
import ListaUsuario from './pages/ListaUsuario'

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/listausuario" element={<ListaUsuario/>}/>
                <Route path="/funcionario" element={<Funcionario/>}/>
                
            </Routes>
        
    
    </BrowserRouter>
 )
}
export default RoutesApp;
