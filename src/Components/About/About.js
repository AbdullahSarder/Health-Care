import React from 'react';
import {Image,Container, Row, Col, Card} from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
 
                    <Container fluid style={{ 
                            backgroundImage: "url(/Images/about/about-3.jpg)",
                            paddingTop:100,
                            paddingBottom:100,
                            backgroundSize:'cover'
                            }}>
                        <Row className="">
                        <div className="col-md-12">
                            <div className="block text-center">
                            <span className="text-white">About Us</span>
                            <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
                        </div>
                        </div>
                        </Row>
                    </Container>

                        <Container>
                            <Row className="mt-5 mb-5">
                                <Col  xl={3} lg={3} md={6}sm={12} className='p-5'>
                                    <h2 className="title-color">Personal care for your healthy living</h2>
                                </Col>
                                <Col  xl={9} lg={9} md={6}sm={12}>
                                    <p>Our Virtual Hospital provides online medical services that allow patients to directly communicate in real-time with doctors and medical staff</p>
                                    <Image src="Images/about/sign.png" alt="" className="img-fluid"/>
                                </Col>
                            </Row>
                        </Container>


                        <Container>
                            <Row className="text-center bt-5">
                                <Col  xl={3} lg={3} md={3}sm={12}>
                                    <div className="about-block-item mb-5 mb-lg-0">
                                        <Image src="images/about/about-1.jpg" alt="" className="img-fluid w-100"/>
                                        <h4 className="mt-3">Healthcare for Kids</h4>
                                        <p>If your children need health coverage, they may be eligible for the Children's Health Insurance</p>
                                    </div>
                                </Col>
                                <Col  xl={3} lg={3} md={6}sm={12}>
                                    <div className="about-block-item mb-5 mb-lg-0">
                                        <Image src="images/about/about-2.jpg" alt="" className="img-fluid w-100"/>
                                        <h4 className="mt-3">Medical Counseling</h4>
                                        <p>counseling. A process or interaction by which one person, either lay or formally trained, helps one or more other persons help themselves and pro-actively .</p>
                                    </div>
                                </Col>
                                <Col  xl={3} lg={3} md={6}sm={12}>
                                    <div className="about-block-item mb-5 mb-lg-0">
                                        <Image src="images/about/about-3.jpg" alt="" className="img-fluid w-100"/>
                                        <h4 className="mt-3">Modern Equipments</h4>
                                        <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                                    </div>
                                </Col>
                                <Col  xl={3} lg={3} md={6}sm={12}>
                                    <div className="about-block-item">
                                        <Image src="images/about/about-4.jpg" alt="" className="img-fluid w-100"/>
                                        <h4 className="mt-3">Qualified Doctors</h4>
                                        <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
 
                  
                        <Container>
                            <Row className="align-items-center mt-5 mb-5">
                                <Col  xl={4} lg={4} md={4}sm={12}>
                                    <h2 className="title-color">Our Doctors<br></br> achievements </h2>
                                    <div className="divider mt-4 mb-5 mb-lg-0"></div>
                                </Col>
                                <Col  xl={8} lg={8} md={8}sm={12}>
                                    <Row className="">
                                        <Col  xl={4} lg={4} md={6}sm={6}>
                                            <div className="award-img">
                                                <Image src="images/about/3.png" alt="" className="img-fluid"/>
                                            </div>
                                        </Col>
                                        <Col  xl={4} lg={4} md={6}sm={6}>
                                            <div className="award-img">
                                                <Image src="images/about/4.png" alt="" className="img-fluid"/>
                                            </div>
                                        </Col>
                                        <Col  xl={4} lg={4} md={6}sm={6}>
                                            <div className="award-img">
                                                <Image src="images/about/1.png" alt="" className="img-fluid"/>
                                            </div>
                                        </Col>
                                        <Col  xl={4} lg={4} md={6}sm={6}>
                                            <div className="award-img">
                                                <Image src="images/about/2.png" alt="" className="img-fluid"/>
                                            </div>
                                        </Col>
                                        <Col  xl={4} lg={4} md={6}sm={6}>
                                            <div className="award-img">
                                                <Image src="images/about/5.png" alt="" className="img-fluid"/>
                                            </div>
                                        </Col>
                                        <Col  xl={4} lg={4} md={6}sm={6}>
                                            <div className="award-img">
                                                <Image src="images/about/6.png" alt="" className="img-fluid"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
  


                        <Container>
                            <Row className="text-center">
                                <Col  lg={12}>
                                    <div className="section-title text-center">
                                        <h2 className="mb-4 text-center">Meet Our Specialist</h2>
                                        <div className="divider mx-auto my-4"></div>
                                        <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="">
                                <Col  xl={3} lg={3} md={6}sm={6}>
                                    <div className="team-block mb-5 mb-lg-0">
                                        <Image src="images/team/1.jpg" alt="" className="img-fluid w-100"/>

                                        <div className="content">
                                            <h4 className="mt-4 mb-0"><a href="doctor-single.html">John Marshal</a></h4>
                                            <p>Internist, Emergency Physician</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col  xl={3} lg={3} md={6}sm={6}>
                                    <div className="team-block mb-5 mb-lg-0">
                                        <Image src="images/team/2.jpg" alt="" className="img-fluid w-100"/>

                                        <div className="content">
                                            <h4 className="mt-4 mb-0"><a href="doctor-single.html">Marshal Root</a></h4>
                                            <p>Surgeon, Сardiologist</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col  xl={3} lg={3} md={6}sm={6}>
                                    <div className="team-block mb-5 mb-lg-0">
                                        <Image src="images/team/3.jpg" alt="" className="img-fluid w-100"/>

                                        <div className="content">
                                            <h4 className="mt-4 mb-0"><a href="doctor-single.html">Siamon john</a></h4>
                                            <p>Internist, General Practitioner</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col  xl={3} lg={3} md={6}sm={6}>
                                    <div className="team-block">
                                        <Image src="images/team/4.jpg" alt="" className="img-fluid w-100"/>

                                        <div className="content">
                                            <h4 className="mt-4 mb-0"><a href="doctor-single.html">Rishat Ahmed</a></h4>
                                            <p>Orthopedic Surgeon</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
        </div>
    );
};

export default About;