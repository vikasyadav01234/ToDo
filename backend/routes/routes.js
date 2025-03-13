import express from "express"
import { getUserId } from "../middlewares/auth.middlewares.js"
import { saveUserTask } from "../controllers/taskapi.js"
import { isUserAuth, isUserValid, registerTheUser } from "../controllers/authapi.js"


const router=express.Router()



router.post('/register',registerTheUser)

router.post('/login',isUserValid)

router.get('/verify',isUserAuth)

router.post('/task',getUserId,saveUserTask)

export { router }