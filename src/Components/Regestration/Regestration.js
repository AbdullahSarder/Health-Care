import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const Regestration = () => {
    return (
        <div>
            <h2 className='text-center'>Sign in</h2>
            {/* <NavLink to="">create an account</NavLink> */}
            <Form onSubmit="" className='m-2 loginform'>
                <input className='mb-2 p-2 logn' type="email" placeholder='Email'></input><br/>
                <input className='mb-2 p-2 logn' type="password" placeholder='Password'></input><br/>
                <input className='mb-2 p-2 logn' type="password" placeholder='Confirm Password'></input><br/>
                <input className='mb-2 p-2 btn bg-primary text-white logn' type="submit" onclick="myFunction()" value="Sign in"></input><br/>

                <Button className='mb-2 p-2 bg-white text-dark logn'><i class="bi bi-google"></i>Sign Up in with Google</Button>
                <p>Already have an Account? <Link to="/login">Sign in</Link></p>
            </Form>
        </div>
    );
};

export default Regestration;