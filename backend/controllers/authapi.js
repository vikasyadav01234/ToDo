import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";
import dotenv from "dotenv";

dotenv.config();

const secret_key = process.env.SECRET_KEY;

const registerTheUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res
        .status(401)
        .json({
          success: false,
          message: `Email id alreay exist ! Please Login`,
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(200)
      .json({
        success: true,
        message: `Registered Successfully! Redirecting to login...`,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Internal server error ${error}` });
  }
};

export { registerTheUser };

/*************************************UserLogin******************************/

const isUserValid = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isEmailExist = await User.findOne({ email });
    if (!isEmailExist) {
      return res
        .status(401)
        .json({
          success: false,
          message: `Email id or password is Wrong! Please check`,
        });
    }

    const isPasswordValid = bcrypt.compare(password, isEmailExist.password);
    if (!isPasswordValid)
      return res
        .status(401)
        .json({
          success: false,
          message: `Email or password wrong! Please check`,
        });
    const token = jwt.sign({ email }, secret_key, { expiresIn: "1h" });
    res.status(200).json({ success: true, message: `Login Successfull` ,token:token});
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Internal Server Error ${error}` });
  }
};

export { isUserValid };






/*****************************************isUserAuthorized**************/



const isUserAuth=async(req,res)=>{
    const token =req.headers.authorization?.split(' ')[1]
    try {
        
    if(!token){
        return res.status(401).json({success:false,message:`Login Expired! Please Login`})
    }
    const decoded=await jwt.verify(token,secret_key)
    if(!decoded){
        return res.status(401).json({success:false,message:`Login Expired ! Please Login`})
    }
    return res.status(200).json({success:true,message:`User Is Authorized`})
    } catch (error) {
        return res.status(500).json({success:false,message:`Internal server Error ${error}`})
        
    }
}



export { isUserAuth }