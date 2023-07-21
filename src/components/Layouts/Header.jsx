import React, { useContext } from "react";
import img from "../../../public/chef.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // Log out
  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {});
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
        <div className="flex-none">
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
      </div>
    </div>
  );
};

export default Header;
