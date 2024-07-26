import  jwt  from "jsonwebtoken";

const generatTokenAndCookie = (user ,res)=>{
    
    const token = jwt.sign(
        {id:user.id,role:user.role},
        process.env.JWT_SECRET_KEY,{expiresIn:'15d'}
    )

    res.cookie('jwt',token,{
        maxAge:15 * 24 * 60 * 60 * 1000,
        httpOnly:true, // secrit from the xss attacks ,cross-site scripting  attacks using js to atack
        sameSiteb: "strict",
    })

    return token;
}

export default generatTokenAndCookie;