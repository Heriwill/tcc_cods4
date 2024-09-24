/*
// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";


const Usuario = () => {
const[ vnome, setNome] = useState('')  //set é para 'passar o valor'
const[ vdescricao, setDescricao] = useState('') //depois, se precisar é só mudar o nome, email etc. para o q tiver na api  
const[ vpreco, setPreco] = useState('')


const handleSubmit = async () => {
try { //tente fazer isso
    //const response  = await api.post('Jack/InserirUsuarioFieb',{nome: nome, email: email, senha: senha, serie: null})
    const response  = await api.post('/produtos',{nome: vnome, descricao: vdescricao, preco: vpreco})
    console.log(response.data)
  } catch (error){ // se nao mostra o erro
  console.log(error)
}
}    //async é a sincronização com a api 

  const [vnome, setNome] = useState('');
  const [vnascimento, setNascimento] = useState('');
  const [vcpf, setCPF] = useState('');
  const [vtelefone, setTelefone] = useState('');
  const [vgenero, setGenero] = useState('');
  const [vemail, setEmail] = useState('');
  const [vsenha, setSenha] = useState('');

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      if (!vnome || !vnascimento || !vcpf || !vtelefone || !vgenero || !vemail || !vsenha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      // Verifica se os campos CPF, telefone e data de nascimento estão completos
      if (vcpf.length !== 11 || vtelefone.length !== 11 || vnascimento.length !== 10) {
        alert("Por favor, preencha os campos CPF, telefone e data de nascimento corretamente.");
        return;
      }

      const response = await api.post('/usuarios', { nome: vnome, nascimento: vnascimento, cpf: vcpf, telefone: vtelefone, genero: vgenero, email: vemail, senha: vsenha });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCPF = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    const maxChars = onlyNums.slice(0, 11);
    setCPF(maxChars);
  };

  const handleChangeTelefone = (e) => { 
    const onlyNums = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    let formattedNumber = onlyNums.slice(0, 11); // Limita a 12 caracteres

    // Adiciona parênteses aos dois primeiros números
    if (formattedNumber.length > 2) {
      formattedNumber = `(${formattedNumber.slice(0, 2)})${formattedNumber.slice(2)}`;
    }

    // Adiciona um traço após os cinco primeiros números
    if (formattedNumber.length > 7) {
      formattedNumber = `${formattedNumber.slice(0, 9)}-${formattedNumber.slice(9)}`;
    }

    setTelefone(formattedNumber);
  };

  const handleChangeNome = (e) => {
    const onlyLetters = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setNome(onlyLetters);
  };

  const handleChangeDataNascimento = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    let formattedDate = onlyNums.slice(0, 8);

    if (formattedDate.length > 2 && formattedDate.length < 5) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    } else if (formattedDate.length >= 5) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2, 4)}/${formattedDate.slice(4)}`;
    }

    setNascimento(formattedDate);
  };

  const handleSelectGenero = (e) => {
    setGenero(e.target.value);
  };

  return (
    <div className="app-container">
    <form onSubmit={handleSubmit(onSubmit)} className="app-container">
      <div className="form-group">
        <label>Nome Completo</label>
        <input type="text" placeholder="Informe o seu Nome Completo"  onChange={(e)=> setNome(e.target.value)}/> 
        <input type="text" placeholder="Informe o seu Nome Completo" value={vnome} onChange={handleChangeNome} />
      </div>

      <div className="form-group">
        <label>Data de Nascimento</label>
        <input type="text" placeholder="Informe sua data de nascimento"  onChange={(e) => setDescricao(e.target.value)} /> 
        <input type="text" placeholder="Informe sua data de nascimento (DD/MM/AAAA)" value={vnascimento} onChange={handleChangeDataNascimento} />
      </div>

      <div className="form-group">
        <label>Gênero</label>
        <input type="text" placeholder="Informe o seu Gênero"  onChange={(e) => setPreco(e.target.value)} /> 
        <div>
          <input type="radio" id="feminino" name="genero" value="Feminino" checked={vgenero === 'Feminino'} onChange={handleSelectGenero} />
          <label htmlFor="feminino">Feminino</label>
        </div>
        <div>
          <input type="radio" id="masculino" name="genero" value="Masculino" checked={vgenero === 'Masculino'} onChange={handleSelectGenero} />
          <label htmlFor="masculino">Masculino</label>
        </div>
      </div>

      <div className="form-group">
        <label>CPF</label>
        <input type="text" placeholder="Informe o seu CPF"  onChange={(e) => setPreco(e.target.value)} /> 
        <input type="text" placeholder="Informe o seu CPF (apenas números)" value={vcpf} onChange={handleChangeCPF} />
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input type="text" placeholder="Informe o seu Número de Telefone"  onChange={(e) => setPreco(e.target.value)} /> 
        <input type="text" placeholder="Informe o seu Número de Telefone (apenas números)" value={vtelefone} onChange={handleChangeTelefone} />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="text" placeholder="Informe o seu E-mail"  onChange={(e) => setPreco(e.target.value)} /> 
        <input type="text" placeholder="Informe o seu E-mail" value={vemail} onChange={(e) => setEmail(e.target.value)} maxLength={40} />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input type="text" placeholder="Informe a sua Senha"  onChange={(e) => setPreco(e.target.value)} /> 
        <div className="senha-container">
          <input type="password" placeholder="Informe a sua Senha" value={vsenha} onChange={(e) => setSenha(e.target.value)} maxLength="20" />
        </div>
      </div>


      <div className="form-group">
            <button onClick={handleSubmit}>Criar o seu Cadastro</button>
        <button type="submit">Criar o seu Cadastro</button>
      </div>
    </form>
  );
};

    </div>
  )
export default Usuario;

}

export default Usuario;


parte da GIULIA
*/




/*
//parte ORIGINAL

//npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";


const Usuario = () => {
const[ vnome, setNome] = useState('')  //set é para 'passar o valor'
const[ vdescricao, setDescricao] = useState('') //depois, se precisar é só mudar o nome, email etc. para o q tiver na api  
const[ vpreco, setPreco] = useState('')


const handleSubmit = async () => {
try { //tente fazer isso
    //const response  = await api.post('Jack/InserirUsuarioFieb',{nome: nome, email: email, senha: senha, serie: null})
    const response  = await api.post('/produtos',{nome: vnome, descricao: vdescricao, preco: vpreco})
    console.log(response.data)
  } catch (error){ // se nao mostra o erro
  console.log(error)
}
}    //async é a sincronização com a api 


  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Informe o Nome do Produto"  onChange={(e)=> setNome(e.target.value)}/> 
      </div>

      <div className="form-group">
        <label>Descricao</label>
        <input type="text" placeholder="Descrição do Produto"  onChange={(e) => setDescricao(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>Preco</label>
        <input type="text" placeholder="Informe o Preço do Produto"  onChange={(e) => setPreco(e.target.value)} /> 
      </div>
      

      <div className="form-group">
            <button onClick={handleSubmit}>Cadastrar</button>
      </div>

    </div>
  )

}

export default Usuario;

*/

// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";

const Usuario = () => {
  const [vnome, setNome] = useState('');
  const [vnascimento, setNascimento] = useState('');
  const [vcpf, setCPF] = useState('');
  const [vtelefone, setTelefone] = useState('');
  const [vgenero, setGenero] = useState('');
  const [vemail, setEmail] = useState('');
  const [vsenha, setSenha] = useState('');

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      if (!vnome || !vnascimento || !vcpf || !vtelefone || !vgenero || !vemail || !vsenha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      // Verifica se os campos CPF, telefone e data de nascimento estão completos
      if (vcpf.length !== 11 || vtelefone.length !== 11 || vnascimento.length !== 10) {
        alert("Por favor, preencha os campos CPF, telefone e data de nascimento corretamente.");
        return;
      }

      const response = await api.post('/usuarios', { nome: vnome, nascimento: vnascimento, cpf: vcpf, telefone: vtelefone, genero: vgenero, email: vemail, senha: vsenha });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCPF = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    const maxChars = onlyNums.slice(0, 11);
    setCPF(maxChars);
  };

  const handleChangeTelefone = (e) => { 
    const onlyNums = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    let formattedNumber = onlyNums.slice(0, 11); // Limita a 12 caracteres
    
    // Adiciona parênteses aos dois primeiros números
    if (formattedNumber.length > 2) {
      formattedNumber = `(${formattedNumber.slice(0, 2)})${formattedNumber.slice(2)}`;
    }
    
    // Adiciona um traço após os cinco primeiros números
    if (formattedNumber.length > 7) {
      formattedNumber = `${formattedNumber.slice(0, 9)}-${formattedNumber.slice(9)}`;
    }
  
    setTelefone(formattedNumber);
  };

  const handleChangeNome = (e) => {
    const onlyLetters = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    setNome(onlyLetters);
  };

  const handleChangeDataNascimento = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    let formattedDate = onlyNums.slice(0, 8);

    if (formattedDate.length > 2 && formattedDate.length < 5) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2)}`;
    } else if (formattedDate.length >= 5) {
      formattedDate = `${formattedDate.slice(0, 2)}/${formattedDate.slice(2, 4)}/${formattedDate.slice(4)}`;
    }

    setNascimento(formattedDate);
  };

  const handleSelectGenero = (e) => {
    setGenero(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="aapp-container">
      <div className="form-group">
        <label>Nome Completo</label>
        <input type="text" placeholder="Informe o seu Nome Completo" value={vnome} onChange={handleChangeNome} />
      </div>
      
      <div className="form-group">
        <label>CPF</label>
        <input type="text" placeholder="Informe o seu CPF (apenas números)" value={vcpf} onChange={handleChangeCPF} />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="text" placeholder="Informe o seu E-mail" value={vemail} onChange={(e) => setEmail(e.target.value)} maxLength={40} />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <div className="senha-container">
          <input type="password" placeholder="Informe a sua Senha" value={vsenha} onChange={(e) => setSenha(e.target.value)} maxLength="20" />
        </div>
      </div>

      <div className="form-group">
        <button type="submit">Criar o seu Cadastro</button>
      </div>
    </form>
  );
};

export default Usuario;


/*
 <div className="form-group">
        <label>Telefone</label>
        <input type="text" placeholder="Informe o seu Número de Telefone (apenas números)" value={vtelefone} onChange={handleChangeTelefone} />
      </div>

      <div className="form-group">
        <label>Data de Nascimento</label>
        <input type="text" placeholder="Informe sua data de nascimento (DD/MM/AAAA)" value={vnascimento} onChange={handleChangeDataNascimento} />
      </div>

      <div className="form-group">
        <label>Gênero</label>
        <div>
          <input type="radio" id="feminino" name="genero" value="Feminino" checked={vgenero === 'Feminino'} onChange={handleSelectGenero} />
          <label htmlFor="feminino">Feminino</label>
        </div>
        <div>
          <input type="radio" id="masculino" name="genero" value="Masculino" checked={vgenero === 'Masculino'} onChange={handleSelectGenero} />
          <label htmlFor="masculino">Masculino</label>
        </div>
      </div>
*/

