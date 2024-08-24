
import express from 'express'
import * as DoctorController from '../controller/DoctorController.js'
import { authenticate, restrict } from '../auth/veriyfication.js'

const DoctorRoute = express.Router()

//#################
import reviewRoute from './reviw.js'


DoctorRoute.use('/:doctorId/reviews',reviewRoute)
//###################
DoctorRoute.get('/:id',  DoctorController.getOneDoctor)
DoctorRoute.get('/',  DoctorController.getAllDoctor)
DoctorRoute.delete('/:id', authenticate, restrict(["doctor"]),DoctorController.deleteDoctor)
DoctorRoute.put('/:id', authenticate, restrict(["doctor"]),DoctorController.updateDoctor)

DoctorRoute.get('/profile/me',authenticate,restrict(['doctor'],DoctorController.getDoctorProfile))

export default DoctorRoute


