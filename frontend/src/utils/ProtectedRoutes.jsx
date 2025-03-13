import React, { useEffect, useState } from 'react'
import Login from '../pages/Login';
import { isUserAuthorised } from '../api/authApi';
import { Outlet } from 'react-router';

function ProtectedRoutes() {
    const  [isvalidUser,setIsValidUser]=useState(false)
    const token=localStorage.getItem("token")


    useEffect(()=>{
        if(!token){
            return
        }

        async function checkAuthorization(){
            const response=await isUserAuthorised(token)
            if(!response.success){
                return;
            }
            setIsValidUser(true)
        }

        checkAuthorization()

    },[])



    return isvalidUser?<Outlet/>:<Login/>



}
export default ProtectedRoutes