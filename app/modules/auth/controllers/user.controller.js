/**
 * Car Controller
 * 
 * @by rafaat
 * @since 1.0
 */

 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

const UserModel = require('../models/user');
const User = require ('../models/user')

/* Router Methods */

exports.Register = async(req,res,next) => {
    const { fullName, email, password} = req.body;

    const hashPassword= await bcrypt.hash(password, 10);

    const newUser = new User({fullName, email, password : hashPassword});

    try{

        const result = await newUser.save();

        const token = jwt.sign({
            id: result._id,
            fullName: result.fullName
        }, process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRY
        })

        res.status(200).json({
            message: "User Successfully Register",
            user: result,
            token: token
        })

    }catch(err){
        res.status(500).json({msg: "There was an server side error"})
    }
}

exports.Login = async(req,res,next) => {
    try{
        const user = await User.findOne({ email : req.body.email });

        if(user){
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            
            if(isValidPassword){
                
                const token = jwt.sign({
                    id: user._id,
                    fullName: user.fullName
                }, process.env.JWT_SECRET,{
                    expiresIn: process.env.JWT_EXPIRY
                })

                res.status(200).json({
                    messgae: "Login Successfull",
                    user,
                    token
                })
            }else{
                res.status(401).json({
                    message: "Authentication failed"
                })
            }
        }
    }catch(err){
        res.status(500).json({
            message: "There was an server side error"
        })
    }
    
}