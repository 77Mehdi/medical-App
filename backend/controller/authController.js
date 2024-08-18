import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'
import bcrypt from 'bcryptjs'
import generatTokenAndCookie from '../utils/generateToken.js'



export const register = async (req, res) => {

    const { name, email, password, photo, gender, role } = req.body;
    try {
        let user = null

        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }

        if (user) {
            return res.status(400).json({ msg: 'user already exist' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        try {
            generatTokenAndCookie(user, res);
            await user.save();
            return res.status(200).json({ success: true, msg: 'User successfully created' });
        } catch (error) {
            console.error('Error saving user:', error.message);
            return res.status(500).json({ msg: 'Error saving user' });
        }



    } catch (error) {
        res.status(500).json({ msg: error.meassage })
    }
}

export const Login = async (req, res) => {

    const { email } = req.body;

    try {
        let user = null;

        const patine = await User.findOne({ email })
        const doctor = await Doctor.findOne({ email })

        if (patine) {
            user = patine
        }
        if (doctor) {
            user = doctor
        }

        if (!user) {
            return res.status(404).json({ msg: "user not find" })
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password)

        if (!isPassword) {
            return res.status(400).json({ msg: "invalid password" })
        }
        // console.log('my user',user)
        //make token
        const token = generatTokenAndCookie(user , res);
       

        const { password, role, appointments, ...rest } = user._doc;
       

        return res.status(200).json({ status: true, msg: "Successfully logged in",token, data: { ...rest }, role });
    } catch (error) {
        return res.status(500).json({ msg: `Faild to login ${error.message}`})
    }
}

export const logout =async (req,res)=>{
    try {
            res.cookie("jwt","",{maxAge:0})
     return res.status(200).json({'msg':'logged out successfuly'})
    } catch (error) {
      console.log('error in logout controller', error.messge);
      return res.status(500).json({ 'msg': 'intrnet server eror from logout ' })
    }
  }