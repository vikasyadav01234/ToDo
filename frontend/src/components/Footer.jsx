import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold">To-Do</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="/home" className="hover:text-gray-400 transition">Home</a>
          </li>
          <li>
            <a href="/todo" className="hover:text-gray-400 transition">To-Do</a>
          </li>
        </ul>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4 opacity-70">
        <p>© {new Date().getFullYear()} To-Do. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
