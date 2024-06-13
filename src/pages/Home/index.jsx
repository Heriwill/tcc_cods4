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
          <p className='texto1'>diferenciar a o tamnho de letra do título do conteudo</p> 
          <p className='texto1'>ascaaaaaaaaaaaaaaaaaa ascccccccccccccccccccccccc sacccccccccccccccccCuidado, o texto passa do espaço sjsjs sjsjs sjsjs jsjsjssssssssssssssssssssssssssssssssssss
          <a href="#cardegrup" className='link'>...entao conhecça nossos planos...</a>vsdsdsvdvsdvsdvvs    
          </p>
           </h1>

           <h2 id='subtitulo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, ratione soluta, nobis alias sint modi, ipsam accusamus fugit sit ex consequatur. Doloremque voluptatem omnis, eum quasi facilis porro quisquam totam?
          <a href="../Usuario" className='link'>.ARRUMAR A VISUALIZACAO DOS LINKS..cadastre-se clicando aqui</a>  
           </h2>

            <p></p>
            <br /><br />
        
        <p></p><br />

        <section id='blocomeio'>

        <Card border="primary" className='cardes' >
        <Card.Header>Header</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
      <br />

      <Card border="primary" className='cardes' >
        <Card.Header>Header</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
    <br />

    <Card border="primary" className='cardes' >
        <Card.Header>Header</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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


