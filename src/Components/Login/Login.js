import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
    function myFunction() { 
        var x = 
        document.getElementById( 
        "myPsw").placeholder;
          
        document.getElementById( 
        "demo").innerHTML = x;
    } 
    return (
        <div >
            <h2 className='text-center'>Sign in</h2>
            <NavLink to="">create an account</NavLink>
            <Form className='m-2 loginform'>
                <input className='mb-2 p-2 logn' type="email" placeholder='Email'></input><br/>
                <input className='mb-2 p-2 logn' type="password" placeholder='Password'></input><br/>
                <input className='mb-2 p-2 btn bg-primary text-white logn' type="submit" onclick="myFunction()" value="Sign in"></input><br/>

                <Button className='mb-2 p-2 bg-white text-dark logn'><i class="bi bi-google"></i>Sign in with Google</Button>
            </Form>
        </div>
    );
};

export default Login;