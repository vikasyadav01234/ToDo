import React from "react";

function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <div className="hero text-center py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Organize Your Tasks</h1>
          <p className="mt-3 text-lg">Manage your to-do list efficiently and boost productivity.</p>
          <button className="mt-5 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Try for Free
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about py-16 text-center px-4">
        <h1 className="text-3xl font-bold">Why Choose Our To-Do List App?</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Simplify your life by organizing tasks, setting reminders, and staying productive.
        </p>
      </div>

      {/* Features Section */}
      <div className="feature py-16 px-4 space-y-12">
        {[
          { title: "Task Management", desc: "Organize tasks efficiently and boost productivity.", image: "https://via.placeholder.com/600" },
          { title: "Reminders & Alerts", desc: "Get notifications for upcoming tasks.", image: "https://via.placeholder.com/600" },
          { title: "Sync Across Devices", desc: "Access your to-do list from anywhere.", image: "https://via.placeholder.com/600" }
        ].map((feature, index) => (
          <div key={index} className={`card flex flex-col md:flex-row items-center bg-white  p-6 rounded-lg w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Image Section */}
            <div className="image w-full md:w-1/2">
              <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover rounded-lg" />
            </div>

            {/* Text Section */}
            <div className="text w-full md:w-1/2 text-center md:text-left px-6">
              <h1 className="text-2xl font-semibold">{feature.title}</h1>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="cta bg-blue-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Get Started Today!</h1>
          <p className="mt-3 text-lg">Join thousands of users who love our To-Do app.</p>
          <button className="mt-5 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
