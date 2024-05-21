import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Funcionario from './pages/Funcionario';

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/funcionario" element={<Funcionario/>}/>
                
            </Routes>
        
    
    </BrowserRouter>
 )
}
export default RoutesApp;
