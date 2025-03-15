import React, { useState } from "react";
import { userRegister } from "../api/authApi.js";
import { useNavigate } from "react-router";


function SignUp() {
    const navigate=useNavigate()
    const [message,setMessage]=useState('')
  const [infoText, setInfoText] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setInfoText({ ...infoText, [e.target.name]: e.target.value });
  };

  const handleOnRegister = async (e) => {
    e.preventDefault();
    

    const response = await userRegister(infoText);
    if (!response.success) {
        setMessage(response.message)
    
      return;
    }
    setMessage(response.message)
    setInfoText({name:"",email:"",password:""})
    setTimeout(()=>{navigate('/login')},1000)
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Create an Account
        </h1>
        {message && ( <p className={`text-center ${message==="Registered Successfully! Redirecting to login..."? "text-green-600":"text-red-600"}`}>{message}</p>)}
        <form className="flex flex-col space-y-4" onSubmit={handleOnRegister}>
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="name"
            value={infoText.name}
            onChange={handleOnChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="email"
            value={infoText.email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="password"
            value={infoText.password}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Not a user?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
