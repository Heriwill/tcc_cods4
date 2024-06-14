import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

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
        <Card.Body className='cardecorpo'>
          <Card.Title>Simples!</Card.Title>
          <Card.Text>
            Estamos dispostos a fazer o seu progresso se tornar realidade! 
          </Card.Text>
        </Card.Body>
      </Card>
    
      <br />

      <Card border="primary" className='cardes' >
        <Card.Header>Como vou ter progresso?</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Muito simples!</Card.Title>
          <Card.Text>
            Graças ao nosso sistema simples e fácil de usar, te daremos todo suporte e funções essencias
            que farão você decolar! 
          </Card.Text>
        </Card.Body>
      </Card>
    
    <br />

    <Card border="primary" className='cardes' >
        <Card.Header>Quais os planos?</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Contamos com 3 planos:</Card.Title>
          <Card.Text>
            <ul>
              <li>Plano Power</li>
              <li>Plano Flex (arrumar isso)</li>
              <li>Plano Black</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

    <br />

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

<   br />

<img src="../images/imgcardemeio.jpeg" id='imgmeio'/>

</section>
      <br />
        <div id='cardegrup'>
        <CardGroup>
      <Card>
        <Card.Img className='imgcardegrupo' variant="top" src="../images/imgcarde1.jpeg" />
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>Plano Power</Card.Title>
          <Card.Text className='cardetexto'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">POWERFLEX ACADEMY</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img className='imgcardegrupo' variant="top" src="../images/imgcarde2.jpeg" heref=""/>
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>Plano Black</Card.Title>
          <Card.Text className='cardetexto'>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">PRECO DOS PLANOS EXEMPLO</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img className='imgcardegrupo' variant="top" src="../images/imgcarde3.jpeg" />
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>Plano Flex</Card.Title>
          <Card.Text className='cardetexto'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deixar nessa altura, mas com fundo em branco</small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </div>
      <p></p>
      <br />
      <footer>
    <div class="container">
        <div class="footerlogo">
            <img src="../images/logo.jpeg" alt=""/>
        </div>
        <div class="columns">
            <div class="column">
                <h3>Redes Sociais</h3>
                <p>Descrição do tópico 1.</p>
            </div>
            <div class="column">
                <h3>Desenvolvdores</h3>
                <p>Descrição do tópico 2.</p>
            </div>
            <div class="column">
                <h3>Cadastre-se</h3>
                <p>Descrição do tópico 3.</p>
            </div>
        </div>
    </div>
</footer>
     

    </>   
    )



}

export default Home;


