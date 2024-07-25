
import express from 'express'
import * as userController from '../controller/useController.js'

const userRout = express.Router()

userRout.get('/:id',userController.getOneUser)
userRout.get('/',userController.getAlluser)
userRout.delete('/:id',userController.deleteUser)
userRout.put('/:id',userController.updateUser)

export default userRout


