import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-5xl font-bold">Stay Organized, Stay Productive</h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple and efficient way to track your daily tasks and boost productivity.
        </p>

        {/* Call to Action */}
        <div className="mt-6 space-x-4">
          <Link
            to="/user/todo"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-gray-900 text-gray-900 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
