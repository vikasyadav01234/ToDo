import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          To-Do
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 absolute md:static bg-blue-600 md:bg-transparent w-full left-0 top-16 md:top-auto md:w-auto px-6 py-4 md:p-0 transition-all ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink to="/home" className="hover:text-gray-200 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/todo" className="hover:text-gray-200 transition">
              To-Do
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-200 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-200 transition">
              Contact
            </NavLink>
          </li>

          {isUserLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 cursor-pointer px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/register" className="hover:text-gray-200 transition">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="hover:text-gray-200 transition">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
