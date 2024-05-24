// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";


const Usuario = () => {
const[ nome, setNome] = useState('')  //set é para 'passar o valor'
const[ email, setEmail] = useState('') //depois, se precisar é só mudar o nome, email etc. para o q tiver na api  
const[ senha, setSenha] = useState('')


const handleSubmit = async () => {
try { //tente fazer isso
    const response  = await api.post('Jack/InserirUsuarioFieb',{nome: nome, email: email, senha: senha, serie: null})
    console.log(response.data)
  } catch (error){ // se nao mostra o erro
  console.log(error)
}
}    //async é a sincronização com a api 


  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Seu Nome"  onChange={(e)=> setNome(e.target.value)}/> 
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email"  onChange={(e) => setEmail(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input type="password" placeholder="Sua Senha"  onChange={(e) => setSenha(e.target.value)} /> 
      </div>
      

      <div className="form-group">
            <button onClick={handleSubmit}>Criar Conta</button>
      </div>

    </div>
  )

}

export default Usuario;