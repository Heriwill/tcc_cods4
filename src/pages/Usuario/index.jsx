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

                  /* !!!!ABAIXO ESTA O CODIGO LO LISTA USUARIO PARA INPLEMENTAR AQUI!!!! */


/*import React, { useState, useEffect } from "react";
import api from "../../services/api";

const DataManagement = () => {
  const [data, setData] = useState([]); // Armazena a lista de categorias
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento
  const [error, setError] = useState(null); // Armazena mensagens de erro, caso ocorram
  const [formData, setFormData] = useState({ nome: "", descricao: "" }); // Armazena os dados do formulário
  const [isEditing, setIsEditing] = useState(false); // Define se estamos no modo de edição
  const [editingId, setEditingId] = useState(null); // Armazena o ID do item sendo editado

  // Carregar os dados da API ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    api.get('categoria')
      .then(response => {
        setData(response.data.data); // Atualiza a lista com os dados retornados
        setLoading(false); // Desativa o carregamento
      })
      .catch(error => {
        setError(error.message); // Armazena a mensagem de erro
        setLoading(false);
      });
  };

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Atualiza o valor do campo modificado
  };

  // Função para cadastrar ou atualizar um item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Atualiza o item existente
      api.put(`categoria/${editingId}`, formData)
        .then(() => {
          fetchData(); // Recarregar a lista após edição
          resetForm(); // Limpar o formulário
        })
        .catch(error => setError(error.message));
    } else {
      // Cadastra um novo item
      api.post('categoria', formData)
        .then(() => {
          fetchData(); // Recarregar a lista após cadastro
          resetForm(); // Limpar o formulário
        })
        .catch(error => setError(error.message));
    }
  };

  // Função para habilitar a edição de um item
  const handleEdit = (item) => {
    setIsEditing(true); // Ativa o modo de edição
    setEditingId(item.id); // Define o ID do item a ser editado
    setFormData({ nome: item.nome, descricao: item.descricao }); // Preenche o formulário com os dados do item
  };

  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({ nome: "", descricao: "" }); // Limpa os campos do formulário
    setIsEditing(false); // Desativa o modo de edição
    setEditingId(null); // Reseta o ID de edição
  };

  // Função para deletar um item
  const handleDelete = (id) => {
    api.delete(`categoria/${id}`)
      .then(() => fetchData()) // Recarrega a lista após a exclusão
      .catch(error => setError(error.message));
  };

  if (loading) return <p>Carregando...</p>; // Exibe um texto enquanto os dados estão carregando
  if (error) return <p>Erro: {error}</p>; // Exibe uma mensagem de erro, caso ocorra

  return (
    <div className="app-container">
      { Seção do formulário de cadastro //** }
      <div className="cadastro-container">
        <h1>{isEditing ? "Atualizar Categoria" : "Cadastrar Nova Categoria"}</h1>

        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome da categoria"
            required
          />
          
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição da categoria"
            required
          />

          <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"}</button> { Botão para cadastrar ou atualizar //}
        </form>
      </div>

       { Separador visual //**}
      <hr style={{ margin: "40px 0", border: "1px solid #ddd" }} />

      { Seção da lista de categorias //** }
      <div className="consulta-container">
        <h2>Lista de Categorias</h2>
        <ul>
          {data.map(item => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.id} - {item.nome} - {item.descricao}
              
              {/* Botão de editar //}
              <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>
                Editar
              </button>

              {/* Botão de deletar, colocado junto ao botão de editar //}
              <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px", color: "red" }}>
                Deletar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataManagement;

*/

// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
//import { useState } from "react";
import React, { useState, useEffect } from "react";
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
      {/*if (!vnome || !vnascimento || !vcpf || !vtelefone || !vgenero || !vemail || !vsenha) {*/}
      if (!vnome || !vcpf || !vemail || !vsenha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      // Verifica se os campos CPF, telefone e data de nascimento estão completos
      {/*if (vcpf.length !== 11 || vtelefone.length !== 11 || vnascimento.length !== 10) {
        
        alert("Por favor, preencha os campos CPF, telefone e data de nascimento corretamente.");
        return;
      }
    */}
    const response = await api.post('/usuario', { nome: vnome, cpf: vcpf, email: vemail, password: vsenha });
    //const response = await api.post('categoria', { nome: vnome, descricao: vemail });
    console.log(response.data);
    alert('Cadastro realizado com sucesso!'); // Mensagem de sucesso
  } catch (error) {
    // Verificando se a resposta do erro está definida
    if (error.response) {
      alert('Erro ao cadastrar: ' + error.response.data.message || 'Erro desconhecido');
      console.error('Erro detalhado:', error.response.data); // Log do erro
    } else if (error.request) {
      alert('Erro ao cadastrar: Sem resposta do servidor.');
      console.error('Erro de requisição:', error.request);
    } else {
      alert('Erro ao cadastrar: ' + error.message);
      console.error('Erro:', error.message);
 // Mensagem de erro
    }
  }
}

   /*const response = await api.post('/usuarios', { 
      nome: vnome, 
      nascimento: vnascimento, 
      cpf: vcpf, 
      telefone: vtelefone, 
      genero: vgenero, 
      email: vemail, 
      senha: vsenha 
    });
console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    console.log(response.data);
    alert('Cadastro realizado com sucesso!'); // Mensagem de sucesso
  } catch (error) {
    console.error(error);
    alert('Ocorreu um erro ao cadastrar. Tente novamente!'); // Mensagem de erro
  }
};*/

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
        <label>Nome Completo  {vnome}</label>
        <input type="text" placeholder="Informe o seu Nome Completo" value={vnome} onChange={handleChangeNome} />
      </div>
      
      <div className="form-group">
        <label>CPF{vcpf}</label>
        <input type="text" placeholder="Informe o seu CPF (apenas números)" value={vcpf} onChange={handleChangeCPF} />
      </div>

      <div className="form-group">
        <label>E-mail {vemail}</label>
        <input type="text" placeholder="Informe o seu E-mail" value={vemail} onChange={(e) => setEmail(e.target.value)} maxLength={40} />
      </div>

      <div className="form-group">
        <label>Senha {vsenha}</label>
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
   
   
   
  const DataList = () => {
  const [data, setData] = useState([]);  // Inicia como array vazio
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Chamada à API para obter os dados
    api.get('categoria')
      .then(response => {
        console.log(response.data);  // Verificar a estrutura dos dados retornados
        setData(response.data.data);  // Acessar corretamente a propriedade "data" que contém o array
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Exibir "Carregando..." enquanto a requisição está sendo feita
  if (loading) return <p>Carregando...</p>;

  // Exibir a mensagem de erro, se ocorrer
  if (error) return <p>Erro: {error}</p>;

  return (
    <ul>
      {/* Verifica se 'data' é um array antes de usar map */}
      {Array.isArray(data) ? (
        data.map(item => (
          <li key={item.id}>
            {item.id} - {item.nome} - {item.descricao}
            <button onClick={() => alert(`Atualizar item ${item.id}`)}>Atualizar</button>
          </li>
        ))
      ) : (
        <p>Dados indisponíveis</p>
      )}
    </ul>
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

