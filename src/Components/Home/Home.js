import React from 'react';
import { Carousel,Row,Container,Col,Card,Image,NavLink, Button, Nav, ButtonGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Header from '../../Header/Header';
// import {Link} from 'react-dom'
import './Home.css';


const cardText = {
      fontSize:14
    }
const Home = () => {
    return (
        <div> 
            <container-fluid>
                        <Carousel>
                            <Carousel.Item >
                                <img
                                className="d-block w-100"
                                src="https://patientcarelink.org/wp-content/uploads/2015/10/HeroBanner-4.jpg"
                                alt="First slide"
                                />
                                
                                <Carousel.Caption >
                                {/* className='position-absolute bottom-50 end-50' */}
                                <h1 className='cTitle'>Your Most Trusted Health Partner</h1>
                                <p className='cText'>Virtual Doctors, we have built a healthcare system where you come first.
                                 Because nothing is more important than your and your family’s health.</p>
                                 <Button className='bannerButton'><NavLink to="">Make A Appoinment</NavLink></Button>
                                </Carousel.Caption>
                                
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://patientcarelink.org/wp-content/uploads/2015/10/HeroBanner-4.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://patientcarelink.org/wp-content/uploads/2015/10/HeroBanner-4.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
            </container-fluid>

            {/* Feature */}
            <Container className="mt-5 mb-5">
                <Row className="justify-content-md-center">
                    <Col  xl={3} lg={4} md={6}sm={12}>
                        <Card className='Card text-start p-2
                        shadow p-3 mb-5 bg-body rounded'>
                            <Card.Body>
                                <Image className="CardImg mt-2 mb-3" src="./Images/surgeon-alt.svg"/>
                                <Card.Subtitle className="text-muted" style={cardText}>24 Hours Service</Card.Subtitle>
                                <Card.Title className="mb-3 cardTitle">Online Appoinment</Card.Title>
                                <Card.Text className="text-muted cardText">Get all time support for emergency.We have introduced the principle of family medicine</Card.Text>
                                <Card.Link className="cardButton pe-auto" to="#">Make an Appoinment</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  xl={3} lg={4} md={6}sm={12}>
                        <Card className='Card text-start p-2
                        shadow p-3 mb-5 bg-body rounded'>
                            <Card.Body>
                                <Image className="CardImg mt-2 mb-3" src="./Images/surgeon-alt.svg"/>
                                <Card.Subtitle className="text-muted" style={cardText}>Timing schedule</Card.Subtitle>
                                <Card.Title className="mb-1 cardTitle">Working Hours</Card.Title>
                                <Card.Body>
                                <Card.Text className="text-muted mb-0 border-bottom border-light cardText">Sun-Wed:<span className='scheduleTime'>8:00-17:00</span></Card.Text>
                                <Card.Text className="text-muted mb-0 cardText">Sun-Wed:<span className='scheduleTime'>9:00-17:00</span></Card.Text>
                                <Card.Text className="text-muted mb-0 cardText">Sun-Wed:<span className='scheduleTime'>10:00:17:00</span></Card.Text>
                                </Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  xl={3} lg={4} md={6}sm={12}>
                        <Card className='Card text-start p-2
                        shadow p-3 mb-5 bg-body rounded'>
                            <Card.Body>
                                <Image className="CardImg mt-2 mb-3" src="./Images/clock-time.svg"/>
                                <Card.Subtitle className="text-muted" style={cardText}>Emegency Cases</Card.Subtitle>
                                <Card.Title className="mb-3 cardTitle">01XXXXXXXXX</Card.Title>
                                <Card.Text className="text-muted cardText">Get all time support for emergency.We have introduced the principle of family medicine</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
 
                   
               

                
                </Row>
            </Container>
            {/* Feature End*/}
        </div>
    );
};

export default Home;