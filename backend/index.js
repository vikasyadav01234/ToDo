import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import { router } from "./routes/routes.js"
import cors from "cors"

connectDB()

const app=express()
app.use(cors())
app.use(express.json())

dotenv.config()


const port=process.env.PORT


app.get('/',(req,res)=>[
    res.status(200).json({success:true,message:"Hello World"})
])

app.use('/api/auth',router)
app.use('/api/save',router)


app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`)
})