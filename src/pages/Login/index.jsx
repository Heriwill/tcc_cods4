// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './login.css';

const Login = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        // Impede que a página seja recarregada
        //preventDefault();
          try {
            if (!register) {
              alert("Por favor, preencha todos os campos!");
              return;
            }
        alert(JSON.stringify(data)) 
       
        //if (data.value.trim() === '') {
          //alert('Campo não preenchido!');
         // data.preventDefault(); // impede o formulário de ser submetido
        //}
    
      // Faz o console log das credenciais do usuário
      console.log("Dados de Login:", { data });
      
          }catch (error) {
            console.log(error);
          }
    };

  return (
    
    <div className="app-container">
        <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email" maxLength={40} {...register ("email")} /> 
        <FaUser className="icon" />
      </div>
      
      <div className="form-group">
        <label>Senha</label>
        <input type="password" placeholder="Sua Senha" maxLength={10} {...register ("senha")} /> 
        <FaLock className="icon" />
      </div>

        <div className="form-group">
            <button onClick={() =>handleSubmit(onSubmit)()}>Entrar</button>
            <p>
            Não tem uma conta? <a href="../usuario">Cadastre-se</a>{" "}
             </p>//if ("Ao entrar vai para nova home ") {
              
            //} else {
              //alert('Erro!')
           // }
         
          
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