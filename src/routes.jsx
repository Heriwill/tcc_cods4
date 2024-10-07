import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Login from './pages/Login';
import ListaUsuario from './pages/ListaUsuario'

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/listausuario" element={<ListaUsuario/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        
    
    </BrowserRouter>
 )
}
export default RoutesApp;
