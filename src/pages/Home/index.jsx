import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import { FaInstagram, FaGithub } from "react-icons/fa";
//npm install react-icons --save      
 

import './home.css'

function Home(){

    return(
      <>  
        
           <img src="../images/imgfundo.jpeg" id='imgtopo'/>
            
           
           <h1 id='titulo'>PowerFlex Academy 
           <p></p>
          <p className='texto1'>Na PowerFlex Academy nossa missão é ajudar você a alcançar seus objetivos de fitness com um programa personalizado que se adapta ao seu estilo de vida e preferências pessoais. Com uma equipe de instrutores altamente qualificados e uma comunidade de apoio, oferecemos uma experiência de treinamento que não apenas molda o corpo, mas também fortalece a mente e o espírito.
          <p><a href="#cardegrup" className='link'>Tá esperando o que? Conheça nossos planos!</a></p>
          </p>
           </h1>

           <h2 id='subtitulo'>Não sabe por onde começar?<a href="../Usuario" className='link'> Clique aqui!</a> Faça seu cadastro e aproveite para defrutar de todos os benefícios que a PowerFlex tem preparado para você! </h2>

            <p></p>
            <br /><br />
        
        <p></p><br />

        <section id='blocomeio'>

       

        <Card border="primary" className='cardes' >
        <Card.Header>Porque escolher a PowerFlex?</Card.Header>
        <Card.Body className='cardecorpomeio'>
          <Card.Title>Simples!</Card.Title>
          <Card.Text>
            Estamos dispostos a fazer o seu progresso se tornar realidade! 
          </Card.Text>
        </Card.Body>
      </Card>
      
     

      <br />
   <Card border="primary" className='cardes' >
        <Card.Header>Quais os planos?</Card.Header>
        <Card.Body  className='cardecorpomeio'>
          <Card.Title>Contamos com 3 planos:</Card.Title>
          <Card.Text>
            <ul>
              <ol className='planoslista' >Plano Power</ol>
              <ol className='planoslista' >Plano Flex</ol>
              <ol className='planoslista' >Plano Titanium</ol>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      
      <Card border="primary" className='cardes' >
        <Card.Header>Como terei progresso?</Card.Header>
        <Card.Body  className='cardecorpomeio'>
          <Card.Title>Muito simples!</Card.Title>
          <Card.Text>
            Graças ao nosso sistema simples e fácil de usar, te daremos todo suporte e funções essencias
            que farão você decolar! 
          </Card.Text>
        </Card.Body>
      </Card>


      <img id='imgmeio' src="../images/imgcardemeio.jpeg" alt="" />
    <br />
    {/* 
    <Card border="primary" className='cardes'>
        <Card.Header>Header</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        */}
<   br />



</section>
      <br />
        <div id='cardegrup'>
        <CardGroup>
      <Card>
        <Card.Img className='imgcardegrupo' variant="top" src="../images/imgcarde1.jpeg" />
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>Plano Power</Card.Title>
          <Card.Text className='cardetexto'>
            Se você quer plano intermediário com suporte de professores, mestres e especialistas no seu desenvolvimento,
            além de um App com exercícios e orientações essenciais para seu progresso e muito mais, o Plano Power é a sua cara! {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">R$ 199,90</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img className='imgcardegrupo' variant="top" src="../images/imgcarde2.jpeg" heref=""/>
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>Plano Titanium</Card.Title>
          <Card.Text className='cardetexto'>
          Plano completo e para família? Com o Plano Titanium vocês contam com o suporte de professores,
          e especialistas; O App da PowerFlex com exercícios e orientações essenciais,
          além de poderem compartilhar todos os benefícios entre os familiares! {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">R$ 299,90</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img className='imgcardegrupo' variant="top" src="../images/imgcarde3.jpeg" />
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>Plano Flex</Card.Title>
          <Card.Text className='cardetexto'>
            Deseja um plano mais básico? O Plano Flex é ideal pois conta com benefícios como: Preço mais acessível em relação à concorrência; 
            App com exercícios e orientações necessárias para sua evolução! {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">R$ 99,90</small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </div>
      <p></p>
      <br />

        
      {/*npm install react-responsive-carousel*/}



      <br />
      <footer>
    <div class="container">
        <div class="footerlogo">
            <img src="../images/logo.jpeg" alt=""/>
        </div>
        <div class="columns">
            <div class="column">
                <h3>Redes Sociais</h3>
                <FaInstagram className="icon" />
                <a href="https://www.instagram.com"><p>Instagram</p></a>
               <a href="git"><p>GitHub</p></a>
               <FaGithub className="icon" />

            </div>
            <div class="column">
                <h3>Desenvolvdores</h3>
                <p>Front-end: Herisson, Giulia</p>
                <p>Back-end: Juliana, Marco, Patrícia, Vinícius</p>
                
            </div>
            <div class="column">
                <h3>Contato</h3>
                <p>(11) 98765-4321</p>
            </div>
        </div>
    </div>
</footer>
     

    </>   
    )    


}

export default Home;


