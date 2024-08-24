import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updateuser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, msg: "Update user success", data: updateuser })
    } catch (error) {
        res.status(500).json({ success: false, msg: "Update user faild" })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, msg: "delete user success" })
    } catch (error) {
        res.status(500).json({ success: false, msg: "delete user faild" })
    }
}

export const getOneUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).select("-password");

        res.status(200).json({ success: true, msg: "user found", data: user })

    } catch (error) {
        res.status(500).json({ success: false, msg: "canot find user" })
    }
}


export const getAlluser = async (req, res) => {

    try {
        const user = await User.find().select("-password");

        res.status(200).json({ success: true, msg: "users found", data: user })

    } catch (error) {
        res.status(500).json({ success: false, msg: "can not find users" })
    }
}


export const getUserProfile = async (req, res) => {
    const userId = req.userId


    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ success: false, msg: "user not found" })
        }

        const { password, ...rest } = user._doc

        res.status(200).json({
            success: true,
            msg: "Profile info is getting",
            data: { ...rest }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Somthing went wrong ,cannot get"
        })
    }
}


export const getMyAppointments = async (req, res) => {

    try {
        // 1 get the appointements from bookin for specific user
        const bookings = await Booking.find({ user: req.userId })

        // 2 extract doctor id from the booking in step 1 
        const doctorId = bookings.map(E => E.doctor.id)

        // 3 get the doctors using doctor id using step 2
        const doctors = await Doctor.find({ id: { $in: doctorId } }).select('-password')
        

        res.status(200).json({
            success: true,
            msg: "Appoinment are getting",
            data: doctors
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Somthing went wrong ,cannot get"
        })
    }
}
