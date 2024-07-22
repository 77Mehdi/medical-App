import express from 'express'
import { Login,register ,logout} from '../controller/authController.js'

const authrouter = express.Router()

authrouter.post('/register',register)
authrouter.post('/login',Login)
authrouter.post('/logout',logout)


export default authrouter