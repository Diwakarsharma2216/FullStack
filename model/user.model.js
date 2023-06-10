const { Schema, model } = require("mongoose");

const userSchema=Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})

// this is user model

const UserModel=model("user",userSchema)

module.exports={UserModel}