import express from "express"
import { getUserId } from "../middlewares/auth.middlewares.js"
import { saveUserTask } from "../controllers/taskapi.js"
import { isUserValid, registerTheUser } from "../controllers/authapi.js"


const router=express.Router()


router.post('/task',getUserId,saveUserTask)

router.post('/register',registerTheUser)

router.post('/login',isUserValid)


export { router }