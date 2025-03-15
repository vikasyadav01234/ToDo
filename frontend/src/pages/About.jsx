import React from "react";

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl text-center p-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">About To-Do App</h1>
        <p className="mt-4 text-lg text-gray-700">
          A simple and efficient task management tool to help you stay organized and productive.
        </p>
        <p className="mt-6 text-gray-600">
          Contact me on GitHub:  
          <a 
            href="https://github.com/sk-adi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
