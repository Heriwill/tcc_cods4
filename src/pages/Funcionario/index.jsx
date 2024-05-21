// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './funcionario.css';

const Funcionario = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))  
    };

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Seu Nome"  {...register ("nome")} /> 
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email"  {...register ("email")} /> 
      </div>

        <div className="form-group">
            
            <button onClick={() =>handleSubmit(onSubmit)()}>Cadastrar Funcionario</button>
      </div>

    </div>
  )

}

export default Funcionario;
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