import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-cyan-600 shadow-2xl">
                <div className="flex-1">
                    <h3 className="btn btn-ghost normal-case text-3xl text-gray-900">
                        korean<span className='text-rose-400 text-4xl'>CHEF</span></h3>
                </div>
                <div className="flex-none">
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink>
                    <button className='default mr-4' >Log out</button>
                    <NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : 'default')}>Register</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;