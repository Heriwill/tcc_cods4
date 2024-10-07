/*
import React, { useState } from 'react';
import './login.css';
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";

import api from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

*/



/*

import React, { useState } from 'react';
import './login.css';
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";

import api from "../../services/api";

const Login = () => {
  const [vemail, setEmail] = useState('');
  const [vpassword, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://localhost:8080ou5173/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vemail, vpassword }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
    <div className="app-container">
      <div className="form-group">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          <input 
          type="email" 
          placeholder="Seu Email" 
          maxLength={40}
          value={vemail}
          onChange={(e) => setEmail(e.target.value)}
          required 
          />
          <FaUser className="icon"/>
       

        </div>
        <div className="form-group">
        <input
          type="password" 
          placeholder="Sua Senha" 
          maxLength={10}
          value={vpassword}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
           <FaLock className="icon" />
        
        </div>
        
        <button type="submit">Entrar</button>
            Não tem uma conta? <a href="../usuario">Cadastre-se</a>{" "}
      </form>
      </div>
    </div>
  );
};

export default Login;

*/




// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";
import './login.css';
import api from "../../services/api";

const Login = () => {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Impede que a página seja recarregada
        //preventDefault();
          try {
            if (!data.email || !data.senha) {//(!register)
              alert("Por favor, preencha todos os campos!");
              return;
            }
        alert(JSON.stringify(data)) 
       
        //if (data.value.trim() === '') {
          //alert('Campo não preenchido!');
         // data.preventDefault(); // impede o formulário de ser submetido
        //}

        
        //{<img id='imgfundo' src="../images/imgfundo.jpeg" alt="" />}

      // Faz o console log das credenciais do usuário
      console.log("Dados de Login:", { data });
      //{...register ("email"){...register ("senha")}
          }catch (error) {
            console.log(error);
          }
    };


  return (
    
    <div className="logingeral">
    <div className="app-container">
        <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email" maxLength={40}  {...register("email", { required: true })} />   
        {errors.email && <span>Este campo é obrigatório</span>}
        <FaUser className="icon" />
      </div>
      
      <div className="form-group">
        <label>Senha</label>
        <input type="password" placeholder="Sua Senha" maxLength={10} {...register("senha", { required: true })}/>
                {errors.senha && <span>Este campo é obrigatório</span>} 
        <FaLock className="icon" />
      </div>

        <div className="form-group">
            <button onClick={() =>handleSubmit(onSubmit)()}>Entrar</button>
            
            Não tem uma conta? <a href="../usuario">Cadastre-se</a>{" "}

      </div>

    </div>
    </div>
  )
}


export default Login;




/*
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './login.css';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log("Dados de Login:", { data });
  };

  return (
    <div className="app-container">
      <div className="form-group">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Seu Email"
          maxLength={40}
          {...register("email", { required: true })}
        />
        {errors.email && <span>Campo obrigatório</span>}
        <FaUser className="icon" />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          placeholder="Sua Senha"
          maxLength={10}
          {...register("senha", { required: true })}
        />
        {errors.senha && <span>Campo obrigatório</span>}
        <FaLock className="icon" />
      </div>

      <div className="form-group">
        <button onClick={handleSubmit(onSubmit)}>Entrar</button>
        <p>
          Não tem uma conta? <a href="../usuario">Cadastre-se</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
*/
/*

/*

/*
import React from 'react';
import { Link } from 'react-router-dom';
import './funcionario.css'

function Funcionario(){

    return(
           
        <div>
            <center><h1>Funcionario Jack</h1></center>
        </div>

    )

}

export default Funcionario;

*/