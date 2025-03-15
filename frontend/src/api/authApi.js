import axios from "axios"



const userRegister=async(userInfo)=>{
    try {
        const response=await axios.post('http://localhost:3000/api/auth/register',userInfo)
        return response.data
    
    } catch (error) {
        console.log(`Error in userRegister ${error}`)
        return error.response.data
    }
}



export { userRegister }






/**************************************UserLogin**********************************/





const isLoginValid=async(loginData)=>{

    try {
        const response=await axios.post("http://localhost:3000/api/auth/login",loginData)
        return response.data
    } catch (error) {
        return error.response.data
    }

}

export { isLoginValid }






/****************************************isUserAuthenticated***********************************/




const isUserAuthorised=async(token)=>{
    try {
        const response=await axios.get('http://localhost:3000/api/auth/verify',
            {
            headers:{
                Authorization: `Bearer ${token}`
            }}
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
}



export { isUserAuthorised }





