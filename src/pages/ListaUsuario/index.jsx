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
      //http://localhost:8080
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

{ /*

    import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Preencha todos os campos');
    } else if (username!== 'admin' || password!== 'password') {
      setError('Usuário ou senha inválidos');
    } else {
      // Autenticação bem-sucedida, redirecionar para a página principal
      console.log('Login successful!');
      // window.location.href = '/';
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        {error && <div style={{ color: 'ed' }}>{error}</div>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
*/}

