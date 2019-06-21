import React, {Component} from 'react'
import { Row, Carousel,Alert, Col } from 'react-bootstrap'
import Navigation from '../Navigation/navigation';
import Card from '../Auxiliar/card'
import Footer from '../Auxiliar/Footer'
import Sala_01 from '../../assets/Sala-01.jpg'
import Sala_02 from '../../assets/Sala-02.jpg'
import Sala_03 from '../../assets/Sala-03.jpg'
import './home.css'

class Home extends Component {
    

   render(){ 
        return(
          <Col md ={12}>
            <div>
                <Row>
                    <Navigation/>
                </Row>
              <Carousel className="CaroselFotos">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sala_01} alt=" logo" 
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sala_02} alt=" logo" 
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Sala_03} alt=" logo" 
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>              
              <br/>
              <Alert variant="danger">
                Temos promoção essa semana alugue 2 horas ganhe 1 hora,
                <Alert.Link href="#">Vem com a Gete</Alert.Link>. Somente essa semana!!!
                </Alert>
                <br/>
              <Row>
                <Card/>              
              </Row>
              <br/>
              <br/>
              <br/>
              <br/>

              <Footer/>
              
            </div>
          </Col>
            
        )
    }
}

export default Home
