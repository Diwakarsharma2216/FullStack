const { Schema, model } = require("mongoose");

const userSchema=Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})


const UserModel=model("user",userSchema)

module.exports={UserModel}