import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Login from './pages/Login';
import ListaUsuario from './pages/ListaUsuario';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/listausuario" element={<ListaUsuario/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                //Assistir o video a parir do minuto 9
                //Video: sistema de Login com React.JS!
            
            </Routes>
        
    
    </BrowserRouter>
 )
}
export default RoutesApp;
