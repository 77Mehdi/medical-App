import Doctor from '../models/DoctorSchema.js'


export const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({ success: true, msg: "Update Doctor success", data: updateDoctor })
    } catch (error) {
        res.status(500).json({ success: false, msg: "Update Doctor faild"})
    }
}

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
         await Doctor.findByIdAndDelete( id);

        res.status(200).json({ success: true, msg: "delete Doctor success" })
    } catch (error) {
        res.status(500).json({ success: false, msg: "delete Doctor faild"})
    }
}

export const getOneDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id ).populate("reviews").select("-password");

        res.status(200).json({ success: true, msg: "Doctor found", data: doctor })

    } catch (error) {
        res.status(500).json({ success: false, msg: "canot find Doctor"})
    }
}


export const getAllDoctor = async (req, res) => {
   
    try {
        const {query}=req.query
        let doctor ;
         if(query){
            doctor = await Doctor.find({
                isApproved:'approved',
                $or:[
                    {name:{$regex:query,$options:"i"}},
                    {specialization:{$regex:query,$options:"i"}},
                ],
            }).select('-password');

         }else{
            doctor = await Doctor.find({isApproved:"approved"}).select("-password");
         }

        

        res.status(200).json({ success: true, msg: "Doctors found", data: doctor })

    } catch (error) {
        res.status(500).json({ success: false, msg: "canot find Doctors"})
    }
}


