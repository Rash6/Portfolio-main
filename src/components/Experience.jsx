import { React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'


import gotg from '../media/GOTG.png'

import ca from '../media/CA.png'
import tcd from '../media/TCD.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'


const Experience = ({darkMode}) => {

    //const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Project -</b></h2>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={tcd}/>
                                        <Card.Body>
                                            <Card.Title align="center">Freshly</Card.Title>
                                            <Card.Text>
                                                <p align="center">A Web Application where user can Order Food</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>A Food Odering Web Application Where users can login to the site and add their favourite dishes to the cart and 
                                        <br></br>User can also sort,filter his favourite foods and pay the payment and the dishes get
                                        <br></br>delivered to their Residential Home address provided in the site.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://clonefreshly.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Rash6/Freshly" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={gotg}/>
                                        <Card.Body>
                                            <Card.Title align="center">BigBasket</Card.Title>
                                            <Card.Text>
                                                <p align="center">A Web Application where user can Order Grocery Products</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>This is the Grocery Ordering web application where the customers can login
                                        <br></br>and go through all the items i.e, vegetables, fruits, staples,cosmetic so on and 
                                        <br></br>then they can add the items according to their cart and pay for the above items via car or cash,
                                        <br></br>the items get delivered 
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>   
                        <a href="https://bigbasket-u3-p.vercel.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Rash6/BIGBASKET-U3-P" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={ca}/>
                                        <Card.Body>
                                            <Card.Title align="center">Mini-WeatherApp</Card.Title>
                                            <Card.Text>
                                                <p align="center">A Web Application where user can find the weather report</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Its an small Web app where when users enters the city 
                                        <br></br>it gives the weather parameters 
                                        <br></br>for the next 7days
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://weather-app-rho-sand-50.vercel.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Rash6/weather-app" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom>
                
            </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience