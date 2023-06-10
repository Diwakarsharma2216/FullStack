
var jwt = require('jsonwebtoken');
require("dotenv").config()
const auth=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    try {
        var decoded = jwt.verify(token, process.env.KEY);
      if(decoded){
        console.log(decoded) 
        req.body.userId=decoded.userId
        req.body.username=decoded.username
        next()
      }else{
        res.status(400).json({msg:"Wrong Crendital"})
      }
    } catch (error) {
        res.status(400).json({msg:"Not Authorize"})
    }
 

}


module.exports={auth}