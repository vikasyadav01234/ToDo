import React, { useEffect, useState } from 'react'
import Login from '../pages/Login';
import { isUserAuthorised } from '../api/authApi';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoutes() {
    const [isvalidUser, setIsValidUser] = useState(null)
    const token = localStorage.getItem("token")


    useEffect(() => {
         const checkAuthorization = async () => {
            try {
                if (!token) {
                    setIsValidUser(false)
                    return
                }
                const response = await isUserAuthorised(token)
                if (!response.success) {
                    localStorage.removeItem("token")
                    setIsValidUser(false)
                    return;
                }
                setIsValidUser(true)
            }
         catch (error) {
            setIsValidUser(false)

        }}
        checkAuthorization()

    }, [])


    if (isvalidUser === null) return <p>Loading...</p>
    return isvalidUser ? <Outlet /> : <Navigate to="/login" />



}
export default ProtectedRoutes