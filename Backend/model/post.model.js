const { Schema, model } = require("mongoose");

const postSchema=Schema({
    title:String,
    body:String,
    device:String,
    userId:String,
    username:String
})

const PostModel=model("Post",postSchema)
module.exports={PostModel}