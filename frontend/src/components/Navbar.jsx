import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold">To-Do</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/home" className="hover:text-gray-400 transition">Home</NavLink>
          </li>
          <li>
            <NavLink to="/user/todo" className="hover:text-gray-400 transition">To-Do</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400 transition">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400 transition">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="hover:text-gray-400 transition">SignIn</NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="hover:text-gray-400 transition">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
