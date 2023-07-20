import React from 'react';

const Register = () => {
    return (
        <form className=''>
            <div>
                <h3>Name</h3>
                <input type="text" name="name" id="" required />
            </div>
            <div>
                <h3>Email Address</h3>
                <input type="email" name="email" id="" required />
            </div>
            <div>
                <h3>Password</h3>
                <input type="password" name="password" id="" required/>
            </div>
            <div>
                <h3>Photo URL</h3>
                <input type="text" name='photo' required />
            </div>
            <input className='btn btn-accent' type="submit" value="Register" />
        </form>
    );
};

export default Register;