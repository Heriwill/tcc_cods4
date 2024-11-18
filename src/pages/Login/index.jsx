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


/*

// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaFacebook } from "react-icons/fa";
import './login.css';
import api from "../../services/api";

const Login = () => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    /*
    const [vemail, setEmail] = useState([]),
    const [vsenha, setSenha] = useState([])

    //npm instal react-hook-form
    useEffect(()=>{
        async function loadLogin(){ //funcao de 'promessa'
            const response = await api.get("caminho/doemail" ,{
                params:{
                    api_key:
                    "781c63760a57dc4bc8050224e5238c54",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results) //resposta da 'promessa'
            setSenha(response.data.results)
        }
        loadLogin()
    },[]) 

    if (!vsenha || !vsenha.isEnpty || !vemail || vemail.isEnpty){
      cath (error) {
        sdvsvv
      }
    }

    */ /*
    const onSubmit = (data) => {
        // Impede que a página seja recarregada
        //preventDefault();
          try {
            if (!data.email || !data.senha) {//(!register)
              alert("Por favor, preencha todos os campos!");
              return;
            }
        alert(JSON.stringify(data))
        
        //alert("Cadastro realizado com sucesso!") 
       

       
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

*/



/*
import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import './login.css';
import api from "../../services/api";  // Certifique-se de que está configurado corretamente

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!data.email || !data.senha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

      // Fazendo a requisição para o backend com os dados do usuário
      const response = await api.post("/usuario", {
        email: data.email,
        senha: data.senha
      });

      // Verifica se a resposta é bem-sucedida (código HTTP 200)
      if (response.status === 200) {
        alert("Login bem-sucedido!");
        // Redireciona o usuário para a página principal ou dashboard
        // redirecionamento para a página inicial (ajuste conforme sua lógica de navegação)
        window.location.href = "/home"; // Exemplo
      } else {
        alert("Credenciais inválidas! Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Ocorreu um erro ao tentar realizar o login. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="logingeral">
      <div className="app-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
          <div className="form-group">
            <label>E-mail</label>
            <input 
              type="email" 
              placeholder="Seu Email" 
              maxLength={40}  
              {...register("email", { required: "Este campo é obrigatório" })} 
            />   
            {errors.email && <span>{errors.email.message}</span>}
            <FaUser className="icon" />
          </div>
          
          <div className="form-group">
            <label>Senha</label>
            <input 
              type="password" 
              placeholder="Sua Senha" 
              maxLength={10} 
              {...register("senha", { required: "Este campo é obrigatório" })}
            />
            {errors.senha && <span>{errors.senha.message}</span>}
            <FaLock className="icon" />
          </div>
          
          <div className="form-group">
            <button type="submit">Entrar</button>
            Não tem uma conta? <a href="../usuario">Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


*/


import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";

const Login = () => {
  // Estados para armazenar as entradas do usuário e status de erro/sucesso
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Para mensagens de erro
  const [loading, setLoading] = useState(false); // Para controlar o carregamento

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede que a página seja recarregada

    // Limpa mensagens de erro antes de enviar
    setErrorMessage("");
    setLoading(true);

    try {
      // Envia a requisição para a API
      const response = await api.fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Certifique-se de que o backend aceite JSON
        },
        body: JSON.stringify({ email: username, password }), // Envia as credenciais no corpo da requisição
      });

      // Verifica a resposta da API
      if (response.ok) {
        const data = await response.json(); // Pega os dados da resposta (pode ser um token ou dados do usuário)
        console.log("Login bem-sucedido:", data);

        // Exemplo de como armazenar o token de autenticação (se houver)
        localStorage.setItem("authToken", data.token); // Armazena o token no localStorage

        // Redireciona o usuário após login (por exemplo, para o dashboard)
        window.location.href = "/dashboard"; // Altere para a rota da sua aplicação
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erro ao fazer login, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setErrorMessage("Ocorreu um erro ao tentar se conectar com o servidor.");
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>

        {/* Campo de e-mail */}
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        {/* Campo de senha */}
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        {/* Exibe mensagem de erro caso haja */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Caixa de verificação "Lembre de mim" */}
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>

        {/* Botão de login */}
        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Login"}
        </button>

        {/* Link para a página de cadastro */}
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

/*
import React, { useState } from 'react';
import './App.css';  // Estilos CSS
 
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
 
  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
 
    // Validação dos campos
    if (!email || !password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }
 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }
 
    setLoading(true);
 
    try {
      // Simulando uma requisição para a API
      const response = await fetch('https://api.exemplo.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
 
      const data = await response.json();
      setLoading(false);
 
      if (data.success) {
        alert('Login bem sucedido!');
        console.log('Usuário logado:', data.user);
      } else {
        setError('Credenciais incorretas. Tente novamente.');
      }
    } catch (error) {
      setLoading(false);
      setError('Erro ao tentar fazer login. Tente novamente mais tarde.');
      console.error('Erro no login:', error);
    }
  };
 
  return (
<div className="login-container">
<h2>Login</h2>
<form onSubmit={handleLogin} className="login-form">
<div className="input-group">
<label htmlFor="email">Email</label>
<input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
</div>
<div className="input-group">
<label htmlFor="password">Senha</label>
<input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
</div>
        {error && <div className="error-message">{error}</div>}
<button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
</button>
</form>
</div>
  );
};
 
export default App;
*/





/* TESTAR PARA API


import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './login.css';
import api from "../../services/api";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            if (!data.email || !data.senha) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // Fazendo a requisição à API
            const response = await api.post('/login', {
                email: data.email,
                senha: data.senha,
            });

            // Verifica se o login foi bem-sucedido
            if (response.data.success) {
                alert("Login bem-sucedido!");
                // Aqui você pode redirecionar o usuário ou armazenar o token
            } else {
                alert("Erro ao fazer login: " + response.data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao fazer login.");
        }
    };

    return (
        <div className="logingeral">
            <div className="app-container">
                <div className="form-group">
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        placeholder="Seu Email" 
                        maxLength={40}  
                        {...register("email", { required: true })} 
                    />   
                    {errors.email && <span>Este campo é obrigatório</span>}
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
                    {errors.senha && <span>Este campo é obrigatório</span>} 
                    <FaLock className="icon" />
                </div>

                <div className="form-group">
                    <button onClick={handleSubmit(onSubmit)}>Entrar</button>
                    Não tem uma conta? <Link to="../usuario">Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

*/


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


/* testar esse agora
// src/components/LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validações simples
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post('https://api.exemplo.com/login', { email, password });
      console.log('Login bem-sucedido:', response.data);
      // Aqui você pode armazenar o token ou redirecionar o usuário
    } catch (err) {
      setError('Falha ao fazer login. Verifique suas credenciais.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

*/