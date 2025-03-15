import express from "express"
import { getUserId } from "../middlewares/auth.middlewares.js"
import { deleteTheTask, getUserTask, saveUserTask, statusUpdate } from "../controllers/taskapi.js"
import { isUserAuth, isUserValid, registerTheUser } from "../controllers/authapi.js"


const router=express.Router()



router.post('/register',registerTheUser)

router.post('/login',isUserValid)

router.get('/verify',isUserAuth)

router.post('/task',getUserId,saveUserTask)

router.get('/tasklist',getUserId,getUserTask)

router.delete(`/deletetask/:id`,deleteTheTask)

router.put('/statusupdate/:id',statusUpdate)

export { router }