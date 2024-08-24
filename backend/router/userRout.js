
import express from 'express'
import * as userController from '../controller/useController.js'
import { authenticate, restrict } from '../auth/veriyfication.js'


const userRout = express.Router()

userRout.get('/:id', authenticate, restrict(["patient"]), userController.getOneUser)
userRout.get('/', authenticate, restrict(["admin"]), userController.getAlluser)
userRout.delete('/:id', authenticate, restrict(["patient"]), userController.deleteUser)
userRout.put('/:id', authenticate, restrict(["patient"]), userController.updateUser)
userRout.get('/profile/me', authenticate, restrict(["patient"]), userController.getUserProfile)
userRout.get('/appointments/my-appointments', authenticate, restrict(["patient"]), userController.getMyAppointments)




export default userRout


