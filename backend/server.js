import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authrouter from './router/auth.js'
import userRout from './router/userRout.js'
import DoctorRoute from './router/doctorRoute.js'
import reviewRoute from './router/reviw.js'
import bookingRoute from './router/booking.js'






dotenv.config()



const app = express();
const port = process.env.PORT || 8000

const corsOption ={
    origin:true
}


app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption))
app.use('/api/auth',authrouter)
app.use('/api/users',userRout)
app.use('/api/doctors',DoctorRoute)
app.use('/api/reviews',reviewRoute)
app.use('/api/bookings',bookingRoute)

// databese conect

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log('mongoDb conect')
    } catch (error) {
        console.log('mongoDb error',error.message)
    }
}





app.listen(port,()=>{
    connectDB();
    console.log(`app work on port ${port}`)
})


