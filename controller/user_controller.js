const User = require('../model/user');
const jwt = require('jsonwebtoken');


module.exports.Register = async (req, res)=>{
    try {
        const findUser = await User.findOne({email: req.body.email});
        if(findUser){
            return res.status(400).json({
                message:"User already Register!!",
                success: false
            })
        }
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
        })
        return res.status(200).json({
            message:"User Register SuccessFully!!",
            success: true,
            newUser
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error in registring the user!!",
            success: false
        })
    }
}

module.exports.login = async (req, res, next)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Email or Password required for logged In!!",
                success: false
            })
        }
        const user = await User.findOne({email: email});
        if(!user || user.password !== password){
            return res.status(401).json({
                message:"Invalid email or password!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "LoggedIn SuccessFully!!",
            success: true,
            data:{
                token: jwt.sign(user.toJSON(), process.env.JWT_SECRET)
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error in login!!",
            error
        })
    }
}