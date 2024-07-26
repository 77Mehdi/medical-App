
import jwt, { decode } from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'



export const authenticate = async (req, res, next) => {

    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, msg: 'No token ' })
    }

    try {
        const token = authToken.split(' ')[1];
        const virfytokin = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = virfytokin.id
        req.role = virfytokin.role

        // console.log(virfytokin.role)
        next()

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: 'Token is expired' });
        }

        return res.status(401).json({ success: false, msg: 'Invalid token' });
    }
}



//  roles =>  this is a function  it's function  insaid a function  the 'roles' is á paramitr of the sacend function
export const restrict = roles => async(req,res,next)=>{ 

    const userId = req.userId
    
    let user;

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)

    if(patient){
        user =patient
    }
    if(doctor){
        user =doctor
    }
    
    // console.log(user)
    if(!roles.includes(user.role)){
        return res.status(401).json({success:false , msg:'You are not authoriz'})
    }

    next();
}







