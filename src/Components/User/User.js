import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './user.css'

const User = () => {
    const{user}=useAuth();
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
                            <Image className="profile" src={user.photoURL}></Image>
                            <h1 className="text-capitalize mb-5 text-lg">{user.displayName}</h1>
                        </div>
                        </div>
                        </Row>
            </Container>
        </div>
    );
};

export default User;