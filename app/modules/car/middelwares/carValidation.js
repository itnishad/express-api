const { check,  validationResult } = require('express-validator')


const carValidators = [
    check("brand")
        .isLength({ min: 1})
        .withMessage("Brand Name is required minimum one character")
        .trim(),
    check("modelName")
        .isLength({ min: 1 })
        .withMessage("Model Name is required minimum one character")
        .trim(),
    check("modelYear")
        .isLength({ min: 4, max: 4 })
        .withMessage("Model Year required E.g: 2001")
        .trim(),
    check("engineCC")
        .isNumeric({min:1})
        .withMessage("Engine CC is required with Number"),
    check("listPrice")
        .isNumeric({ min:1 })
        .withMessage("List Price is required with Number")

];

const carValidationHandler = (req, res, next)=>{
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
    carValidators,
    carValidationHandler
}