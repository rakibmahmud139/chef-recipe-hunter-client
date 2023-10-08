import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    //context
    const { createUser, googleSignIn, githubSignIn, setUser } = useContext(AuthContext);



    const handleToRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess('');

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('At least one uppercase character');
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('At least one digit');
            return;
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                form.reset('');
                setError('');
                setSuccess('Register Successful');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    // Google Sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const createdUser = result.user;
                setError('');
                setSuccess('Register Successful');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    // Github Sign In
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const createdUser = result.user;
                setError('');
                setSuccess('Register Successful');
            })
            .catch(error => {
                setError(error.message);
            })
    }





    return (
        <div data-aos="zoom-in-up" data-aos-duration="3000">
            <form onSubmit={handleToRegister} className='md:mx-96 px-4 md:px-0 mt-24 items-center'>
                <h3 data-aos="fade-down" data-aos-duration="3000" className='text-5xl mb-4'>Please Register !!</h3>
                <div data-aos="fade-right" data-aos-duration="3000" className='mb-4'>
                    <h3>Name</h3>
                    <input className='w-full md:w-96 h-8 rounded-lg mt-2 pl-2' type="text" name="name" id="#name" required />
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" className='mb-4'>
                    <h3>Photo URL</h3>
                    <input className='w-full md:w-96 h-8 rounded-lg mt-2 pl-2' type="text" name='photo' id='#photo' required />
                </div>
                <div data-aos="fade-right" data-aos-duration="3000" className='mb-4'>
                    <h3>Email Address</h3>
                    <input className='w-full md:w-96 h-8 rounded-lg mt-2 pl-2' type="email" name="email" id="#email" required />
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" className='mb-4'>
                    <h3>Password</h3>
                    <input className='w-full md:w-96 h-8 rounded-lg mt-2 pl-2' type="password" name="password" id="#password" required />
                </div>
                <div data-aos="fade-up" data-aos-duration="3000">
                    <input className='btn btn-accent' type="submit" value="Register" />
                    <p className='mt-4'>Have a account? <span className='text-green-500'><Link to='/login'>Login</Link></span></p>
                    <p className='text-red-600 mt-4'>{error}</p>
                    <p className='text-green-800 mt-4'>{success}</p>
                </div>
            </form>


            {/* Google Sign In */}
            <button data-aos="fade-right" data-aos-duration="3000" onClick={handleGoogleSignIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg md:mx-96 mt-4 bg-slate-300 text-gray-800 w-full h-12 md:h-0 md:w-80"><FaGoogle className='text-blue-800 h-12 w-8' /> Login With Google</button>


            {/* Github Sign In */}
            <button data-aos="fade-left" data-aos-duration="3000" onClick={handleGithubSignIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg md:mx-96 mt-4 bg-slate-300 text-gray-800 w-full h-12 md:h-0 md:w-80"><FaGithub className='text-green-900 h-12 w-8' /> Login With Github</button>
        </div>

    );
};

export default Register;