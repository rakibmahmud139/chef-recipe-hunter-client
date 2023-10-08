import React, { useContext, useState } from "react";
import img from "../../../public/chef.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [nav, setNav] = useState(false);


  // Log out
  const handleLogout = () => {
    logOut()
      .then((res) => { })
      .catch((err) => { });
  };

  return (
    <div>
      <div className="navbar bg-gray-200 shadow-2xl mx-auto">
        <div className="flex-1">
          <img className="w-8 h-8" src={img} alt="" />
          <h3 className="btn btn-ghost normal-case text-3xl text-gray-900">
            korean<span className="text-rose-400 text-4xl">CHEF</span>
          </h3>
        </div>
        <div className="hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
          {user ? (
            <button onClick={handleLogout} className="default mr-4">
              Log out
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Login
            </NavLink>
          )}
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Register
          </NavLink>
          {user && <p>{user.displayName}</p>}
        </div>

        <div onClick={() => setNav(!nav)} className='cursor-pointer z-30 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {
          nav && (
            <div className="flex flex-col justify-center items-center absolute top-16 right-0 h-48 w-24 bg-gradient-to-b from-black to-gray-800 text-gray-500 space-y-5'">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
              {user ? (
                <button onClick={handleLogout} className="default mr-4">
                  Log out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : "default")}
                >
                  Login
                </NavLink>
              )}
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Register
              </NavLink>
              {user && <p>{user.displayName}</p>}
            </div>
          )
        }

      </div>
    </div>
  );
};

export default Header;
