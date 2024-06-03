import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

import './home.css'

function Home(){

    return(
      <>  
        
           <img src="../images/imgfundo.jpeg" alt="" />

           
           <h1 id='titulo'>PowerFlex Academy
          <p className='texto1'>diferenciar a o tamnho de letra do título do conteudo</p> 
          <p className='texto1'>ascaaaaaaaaaaaaaaaaaa ascccccccccccccccccccccccc sacccccccccccccccccCuidado, o texto passa do espaço sjsjs sjsjs sjsjs jsjsjssssssssssssssssssssssssssssssssssss</p>
           </h1>

           <h2 >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, ratione soluta, nobis alias sint modi, ipsam accusamus fugit sit ex consequatur. Doloremque voluptatem omnis, eum quasi facilis porro quisquam totam?</h2>

            <p></p>
            <br /><br />
        
        <p></p><br />


        <Card border="primary" style={{ width: '18rem' }} >
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

      <img src="../images/imgcarde2.jpeg" id='imgmeio'/>

      <Card border="primary" className='cardedireita' >
        <Card.Header>Header, mudar para esquerda da margem</Card.Header>
        <Card.Body className='cardecorpo'>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
    <br />

    <Card border="primary" className='cardedireita' >
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

    <Card border="primary" style={{ width: '18rem' }} >
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

        <div>
        <CardGroup>
      <Card>
        <Card.Img className='Card.Img' variant="top" src="../images/imgcarde1.jpeg" />
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>
          <a href="http://" className='link'>XXXXXXXXXXXXXXX</a>  
          </Card.Title>
          <Card.Text className='cardetexto'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../images/imgcarde2.jpeg" heref=""/>
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>
          <a href="../Usuario" className='link'>cadastre-se</a>  
          </Card.Title>
          <Card.Text className='cardetexto'>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">PowerFlex Academy</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../images/imgcarde1.jpeg" />
        <Card.Body className='cardecorpo'>
          <Card.Title className='cardetitulo'>
          <a href="http://" className='link'>Acesse o App</a>
          </Card.Title>
          <Card.Text className='cardetexto'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </div>
    

      <footer>
        <p>Footer</p>
        <p>Informacoes finais</p>
      </footer>
     

    </>   
    )



}

export default Home;


