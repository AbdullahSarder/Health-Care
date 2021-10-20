import React from 'react';
import {Container,Row,Col, NavLink, Image} from 'react-bootstrap'
import './Footer.css'

function Footer ()  {
    return (
        <div>
            <Container fluid className="footer">
                <Container >
                    <Row className='text-xl-left text-lg-left mt-5 p-5'>
                        <Col xl={4} lg={4} md={6}sm={6} >
                            <Image src="Virtual_Doctors.png" className="footerlogo"></Image>
                            <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos 
                                obcaecati tenetur veritatis eveniet distinctio possimus.</p>
                            <Container>
                                <span className='SocialIcon'><i className="bi bi-facebook"></i></span>
                                <span className='SocialIcon'><i class="bi bi-youtube"></i></span>
                                <span className='SocialIcon'><i class="bi bi-instagram"></i></span>
                            </Container>
                        </Col>
                        {/* Department Code Start */}
                        <Col xl={2} lg={2} md={4}sm={4} >
                             <h2>Department</h2>
                             <div className="divider"></div>
                             <NavLink to="/" className='linkcolor'>Surgery</NavLink>
                             <NavLink to="/" className='linkcolor'>Wome's Health</NavLink>
                             <NavLink to="/" className='linkcolor'>Radiology</NavLink>
                             <NavLink to="/" className='linkcolor'>Cardioc</NavLink>
                             <NavLink to="/" className='linkcolor'>Medicine</NavLink>
                        </Col>
                        {/* Department Code Start */}
                        <Col xl={2} lg={2} md={6}sm={6} >
                             <h2>Support</h2>
                             <div className="divider"></div>
                             <NavLink to="/" className='linkcolor'>Terms & Conditions</NavLink>
                             <NavLink to="/" className='linkcolor'>Privacy Policy</NavLink>
                             <NavLink to="/" className='linkcolor'>Company Support</NavLink>
                             <NavLink to="/" className='linkcolor'>FAQuestions</NavLink>
                             <NavLink to="/" className='linkcolor'>Company Licence</NavLink>
                        </Col>
                        {/* Department Code Start */}
                        <Col xl={4} lg={4} md={6}sm={6}>
                             <h2 className='text-left'>Get In Touch</h2>
                             <div className="divider"></div>
                             <NavLink to="/" className='linkcolor'>Support Available for 24/7</NavLink>
                             <NavLink to="/" className='linkcolor'>Support@email.com</NavLink>
                             <NavLink to="/" className='linkcolor'>Mon to Fri : 08:30 - 18:00</NavLink>
                             <NavLink to="/" className='linkcolor'>+23-456-6588</NavLink>
                        </Col>
                    </Row>
                </Container>
                <Row>
                  <p>&copy; Copyright: <NavLink to="/home"> VirtualDoctors.com</NavLink></p>
                </Row>

            </Container>    
        </div>
    );
}

export default Footer;