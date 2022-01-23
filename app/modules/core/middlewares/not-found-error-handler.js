module.exports = async function(req,res,next) {
    
    return res.status(404).json({message:'Nothing found.'})

}