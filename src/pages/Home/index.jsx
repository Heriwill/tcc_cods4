import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './home.css'

function Home(){

    return(
      <>  
        <div>
           <img src="../images/imgfundo.jpeg" alt="" />
          <div className='texto1'>teste pq sim</div>
           <h1 className='titulo'>Projeto Academia</h1>
           <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, ratione soluta, nobis alias sint modi, ipsam accusamus fugit sit ex consequatur. Doloremque voluptatem omnis, eum quasi facilis porro quisquam totam?</h2>

            <p></p>
            <br /><br />
        </div>
        <p></p><br />

        <div  className='cardetextoo'>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />


        <div>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="../images/imgcarde1.jpeg" />
        <Card.Body className='corpocarde'>
          <Card.Title className='cardetitulo'>XXXXXXXX</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../images/imgcarde2.jpeg" />
        <Card.Body>
          <Card.Title>cadastre-se</Card.Title>
          <Card.Text>
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
        <Card.Body>
          <Card.Title>Acesse o App</Card.Title>
          <Card.Text>
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
    


     

    </>   
    )



}

export default Home;


