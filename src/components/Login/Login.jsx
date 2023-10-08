import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';



const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

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
                setSuccess('Login Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }





    return (
        <form data-aos="zoom-in-up" data-aos-duration="3000" onSubmit={handleToLogin} className='md:mx-96 px-4 md:px-0 mt-24 items-center'>
            <h3 data-aos="fade-down" data-aos-duration="3000" className='text-3xl md:text-5xl mb-4'>Please Login !!</h3>
            <div data-aos="fade-right" data-aos-duration="3000" className='mb-4'>
                <h3>Email Address</h3>
                <input className='w-full md:w-96 h-8 rounded-lg mt-2 pl-2' type="email" name="#email" id="email" required />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className='mb-4'>
                <h3>Password</h3>
                <input className='w-full md:w-96 h-8 rounded-lg mt-2 pl-2' type="password" name="password" id="#email" required />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
                <input className='btn btn-accent' type="submit" value="Login" />
                <p className='mt-4'>Don't have account? <span className='text-green-500'><Link to='/register'>Register</Link></span></p>
                <p className='text-red-600 mt-4'>{error}</p>
                <p className='text-green-800 mt-4'>{success}</p>
            </div>
        </form>

    );
};

export default Login;