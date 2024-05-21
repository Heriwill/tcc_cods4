import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './home.css'

function Home(){

    return(
      <>  
        <div>
           <img src="../imgfundo.jpeg" alt="" />
           <h1 className='titulo'>Projeto Academia</h1>
           <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, ratione soluta, nobis alias sint modi, ipsam accusamus fugit sit ex consequatur. Doloremque voluptatem omnis, eum quasi facilis porro quisquam totam?</h2>

            <p></p>
            <br /><br />
        </div>
        <p></p><br />

        <div>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>XXXXXXXX</Card.Title>
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
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>cadastre-se</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
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


