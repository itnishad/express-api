module.exports = async function(err,req,res,next) {
    
    switch(err.name){
        case 'CarValidationError':
            return res.status(400).json({message:err.message});
    }

    return next(err);

}