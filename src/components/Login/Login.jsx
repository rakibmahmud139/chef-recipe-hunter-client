import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form className='mx-96 mt-24 items-center'>
            <h3 className='text-5xl mb-4'>Please Login !!</h3>
            <div className='mb-4'>
                <h3>Email Address</h3>
                <input className='w-96 h-8 rounded-lg mt-2' type="email" name="email" id="" required />
            </div>
            <div className='mb-4'>
                <h3>Password</h3>
                <input className='w-96 h-8 rounded-lg mt-2' type="password" name="password" id="" required />
            </div>
            <input className='btn btn-accent' type="submit" value="Login" />
            <p className='mt-4'>Don't have account? <span className='text-green-500'><Link to='/register'>Register</Link></span></p>
        </form>

    );
};

export default Login;