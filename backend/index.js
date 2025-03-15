import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import { router } from "./routes/routes.js"
import cors from "cors"

connectDB()

const app=express()


app.use(
  cors({
    origin: [
      "https://to-do-git-main-adityas-projects-cbcd3379.vercel.app",
      "https://to-do-taupe-two-14.vercel.app",
    ],
    credentials: true, // This allows cookies and authorization headers to be sent
  })
);

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