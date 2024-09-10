

import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const getllReviews = async (req, res) => {

    try {
        const reviews = await Review.find()

        res.status(200).json({ success: true, msg: 'Succeccful', data: reviews })
    } catch (error) {
        res.status(404).json({ success: false, msg: 'Not found' })
    }
}

export const createReview = async (req, res) => {
   
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try {
        const savedReviw = await  newReview.save()
       
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.body.doctor,{
             $push:{reviews:savedReviw._id},
             new: true ,
        })

        if (!updatedDoctor) {
            return res.status(404).json({ success: false, msg: 'Doctor not found' });
        }

        res.status(200).json({ success: true, msg: 'Review submitted', data: savedReviw })
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message })
    }
}





