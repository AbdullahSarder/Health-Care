import React from 'react';
import './Header.css'
import { Navbar,Container,Nav,Image } from 'react-bootstrap';
import {Link}from 'react-router-dom'

  
const Header = () => {
    return (
        <div className='container-fluid bg-white Topbar'>
            <Navbar collapseOnSelect expand="lg" bg="white" text="dark">
                    <Container>
                    <Navbar.Brand to="/home"><Image id="logo" src="Virtual_Doctors.png"/></Navbar.Brand>
                    <Navbar.Brand to="/home" className="Logoname">VIRTUAL DOCTOR</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link className="p-2 text-dark" to="/home">Home</Link>
                            <Link className="p-2 text-dark" to="/about">About</Link>
                            <Link className="p-2 text-dark" to="/department">Department</Link>
                            <Link className="p-2 text-dark" to="/appoinment">Appoinment</Link>
                            <Link className="p-2 text-dark" to="/doctors">Doctors</Link>
                            <Link className='login-btn btn bg-dark text-white' to="/login">Login</Link>

                        </Nav>

                    </Navbar.Collapse>
                    </Container>  
            </Navbar>
        </div>
    );
};

export default Header;