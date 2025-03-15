import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { User } from "../models/User.model.js"
dotenv.config()




const getUserId=async(req,res,next)=>{
    const token =req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({success:false,message:`Login Expired! Please Login Again`})
    }
    try {
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        req.user=await User.findOne(decoded.id).select("-password")
        next()
        
    } catch (error) {
        res.status(201).json({success:false,message:"Login Expired"})
        
    }

}


export { getUserId }