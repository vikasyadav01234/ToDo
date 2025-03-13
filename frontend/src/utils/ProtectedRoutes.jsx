import React, { useState } from 'react'
import Login from '../pages/Login';

function ProtectedRoutes() {

    const [isValid,setIsValid]=useState(false)

    const token=localStorage.getItem("token")

    if(!token){
        return;
    }
    
    const repsonse= isLoggedIn(token)
    if(!repsonse.success){
        return;
    }
    setIsValid(true)

    isValid==='true'?<Outlet/>:<Login/>


  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes