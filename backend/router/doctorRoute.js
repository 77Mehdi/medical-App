
import express from 'express'
import * as DoctorController from '../controller/DoctorController.js'

const DoctorRoute = express.Router()

DoctorRoute.get('/:id',DoctorController.getOneDoctor)
DoctorRoute.get('/',DoctorController.getAllDoctor)
DoctorRoute.delete('/:id',DoctorController.deleteDoctor)
DoctorRoute.put('/:id',DoctorController.updateDoctor)

export default DoctorRoute


