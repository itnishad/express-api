const { check, validationResult } = require('express-validator')
const User = require('../models/user')

const userValidation = [
    check("fullName")
        .isLength({ min: 3 })
        .withMessage("Name is required minimum 3 character")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("Invalid email address")
        .trim()
        .custom(async(value) => {
            try{
                const user = await User.findOne({ email: value});

                if(user){
                    
                    throw createError('Email alrady exist');
                }
            }catch(err){
                    throw createError(err.message);
            }
        }),
    check("password")
        .isStrongPassword()
        .withMessage("Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol")
]

const userValidationHandler = (req, res, next)=>{
    const error = validationResult(req);

    const mapError = error.mapped();
    
    if(Object.keys(mapError).length === 0){
        next();
    }else{
        res.status(400).json({
            errors: mapError
        })
    }
}

module.exports= {
    userValidation,
    userValidationHandler
}