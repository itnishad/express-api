module.exports = async function(err,req,res,next) {
    
    switch(err.name){
        case "LTDCouponError":
            return res.status(400).json({message:err.message});         
        case "AuthenticationError":
            return res.status(400).json({message:err.message});
        case 'YoutubeAdError':
            return res.status(500).json({message:err.message});
    
        default:
            console.log(err);
            return res.status(500).json({message:"Something went wrong"}); 
    }

}