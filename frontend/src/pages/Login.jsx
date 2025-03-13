import React, { useState } from "react";
import { useNavigate } from "react-router";
import { isLoginValid } from "../api/authApi";

function Login() {
    const navigate=useNavigate()
    const [message,setMessage]=useState('')
    const [loginData,setLoginData]=useState({email:'',password:''})

    const handleOnChange=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        console.log(loginData)
        const response=await isLoginValid(loginData)
        if(!response.success){
            console.log(response)
            setMessage(response.message)
            return;
        }
        setMessage(response.message)
        localStorage.setItem("token",response.token)
        navigate('/user/todo')
        setLoginData({email:'',password:''})
    }




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Welcome Back!
        </h1>
        {message && <p className="text-center text-red-600">{message}</p>}
        <form className="flex flex-col space-y-4" onSubmit={handleOnSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="email"
            value={loginData.email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            name="password"
            value={loginData.password}
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Not a user?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
