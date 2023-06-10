const express=require("express")
const { UserModel } = require("../model/user.model")
const bcrypt = require('bcrypt');
require("dotenv").config()
var jwt = require('jsonwebtoken');
const userRouter=express.Router()


// ######  /users/register ##########

userRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password}=req.body
    try {
        bcrypt.hash(password, 2,async(err,hash)=>{
            if(err){
                res.status(200).json({msg:err.message})
            }else{
                const user=new UserModel({name,email,gender,password:hash})
                await user.save()
                res.status(200).json({msg:"Register Succesful",Registerduser:req.body})
            }
        }); 
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

// #######  /users/login #######

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    
    try {
       const user=await UserModel.findOne({email})
      if(user){
        bcrypt.compare(password, user.password, (err, result)=>{
           if(err){
            res.status(200).json({msg:err.message})
           }else if(result){
            const userId=user._id
            const username=user.name
         let token =  jwt.sign({userId,username}, process.env.KEY, { expiresIn: '1h' });
         res.status(200).json({msg:"Login Succesfully😊",token})
           }
        });
      }
        
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
     
})



module.exports={userRouter}