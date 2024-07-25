import User from '../models/UserSchema.js'


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
        res.status(500).json({ success: false, msg: "Update user faild"})
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
         await User.findByIdAndDelete( id);

        res.status(200).json({ success: true, msg: "delete user success" })
    } catch (error) {
        res.status(500).json({ success: false, msg: "delete user faild"})
    }
}

export const getOneUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id ).select("-password");

        res.status(200).json({ success: true, msg: "user found", data: user })

    } catch (error) {
        res.status(500).json({ success: false, msg: "canot find user"})
    }
}


export const getAlluser = async (req, res) => {
   
    try {
        const user = await User.find().select("-password");

        res.status(200).json({ success: true, msg: "users found", data: user })

    } catch (error) {
        res.status(500).json({ success: false, msg: "canot find users"})
    }
}


