import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()


const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MongoDB_URI}/${process.env.DB_NAME}`)
        console.log(`MongoDB connected at ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log(`DB connection failed Error: ${error}`)
        
    }
}



export default connectDB

