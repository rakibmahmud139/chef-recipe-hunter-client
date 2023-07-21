import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    //context
    const { createUser } = useContext(AuthContext);



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
                setSuccess('Register Successful')
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <form onSubmit={handleToRegister} className='mx-96 mt-24 items-center'>
            <h3 className='text-5xl mb-4'>Please Register !!</h3>
            <div className='mb-4'>
                <h3>Name</h3>
                <input className='w-96 h-8 rounded-lg mt-2 pl-2' type="text" name="name" id="#name" required />
            </div>
            <div className='mb-4'>
                <h3>Photo URL</h3>
                <input className='w-96 h-8 rounded-lg mt-2 pl-2' type="text" name='photo' id='#photo' required />
            </div>
            <div className='mb-4'>
                <h3>Email Address</h3>
                <input className='w-96 h-8 rounded-lg mt-2 pl-2' type="email" name="email" id="#email" required />
            </div>
            <div className='mb-4'>
                <h3>Password</h3>
                <input className='w-96 h-8 rounded-lg mt-2 pl-2' type="password" name="password" id="#password" required />
            </div>
            <input className='btn btn-accent' type="submit" value="Register" />
            <p className='mt-4'>Have a account? <span className='text-green-500'><Link to='/login'>Login</Link></span></p>
            <p className='text-red-600 mt-4'>{error}</p>
            <p className='text-green-800 mt-4'>{success}</p>
        </form>

    );
};

export default Register;