import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';



const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Context
    const { loginUser } = useContext(AuthContext);



    // Login User
    const handleToLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess('');

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset('');
                setError('');
                setSuccess('Login Successful')
            })
            .catch(error => {
                setError(error.message);
            })
    }





    return (
        <form onSubmit={handleToLogin} className='mx-96 mt-24 items-center'>
            <h3 className='text-5xl mb-4'>Please Login !!</h3>
            <div className='mb-4'>
                <h3>Email Address</h3>
                <input className='w-96 h-8 rounded-lg mt-2 pl-2' type="email" name="#email" id="email" required />
            </div>
            <div className='mb-4'>
                <h3>Password</h3>
                <input className='w-96 h-8 rounded-lg mt-2 pl-2' type="password" name="password" id="#email" required />
            </div>
            <input className='btn btn-accent' type="submit" value="Login" />
            <p className='mt-4'>Don't have account? <span className='text-green-500'><Link to='/register'>Register</Link></span></p>
            <p className='text-red-600 mt-4'>{error}</p>
            <p className='text-green-800 mt-4'>{success}</p>
        </form>

    );
};

export default Login;