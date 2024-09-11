import express from 'express'
import {getCheckoutSession} from './../controller/BookingController.js'
import {authenticate} from '../auth/veriyfication.js'


const bookingRoute=express.Router()

bookingRoute.post('/checkout-session/:doctorId',authenticate,getCheckoutSession)


export default bookingRoute





