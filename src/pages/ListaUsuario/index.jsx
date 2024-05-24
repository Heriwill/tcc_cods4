import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from "react";

import './listausuario.css';
import api from "../../services/api";

const DataLista = () =>{ //lista de dados

    const [ data, setData] = useState([]); //muda de vazio para preenchido
    const [ loading, setLoading] = useState([]);
    const [ error, setError] = useState(null);

    useEffect(() => {
        api.get('Jack/obterUsuariosFieb').then(response =>{
            console.log(response)
            setData(response.data);
            setLoading(false);
        })
        .catch(error =>{
            setError(error.message);
            setLoading(false);
        });
    },[]);

if (loading) return <p>Carregando...</p>
if (error) return <p>Erro; {error}</p>

return(
    <ul>
        {data.map(item => ( // map é o for; ou foreache
            <li key={item.id}>{item.codigo}-{item.nome}-{item.email}-{item.senha}</li>


        ))} 
        
    </ul>
);
};



export default DataLista;


