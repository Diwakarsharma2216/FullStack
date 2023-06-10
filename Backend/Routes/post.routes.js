const express=require("express")
const { auth } = require("../middleware/Auth")
const { PostModel } = require("../model/post.model")
const PostRouter=express.Router()
PostRouter.use(auth)

// ########## /create ########

PostRouter.post("/create",async(req,res)=>{
    try {
const userpost=new PostModel(req.body)
await userpost.save()

res.status(200).json({msg:"Post Succesfully",userpost})
        
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

// ####### /posts ########

PostRouter.get("/",async(req,res)=>{
try {
    const userdata=await PostModel.find({userId:req.body.userId})
    res.status(200).json({msg:userdata})
} catch (error) {
    res.status(400).json({msg:error.message})
}
})

// ##### patch Here ######

PostRouter.patch("/update/:id",async(req,res)=>{
const {id}=req.params
const user=await PostModel.findById({_id:id})
const userId=user.userId
    try {
        if(userId===req.body.userId){
           await PostModel.findByIdAndUpdate({_id:id},req.body)
           res.status(200).json({msg:"Updated",user})
        }else{
            res.status(200).json({msg:"You are Not Authrozi"})
        }
        
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})


// ##### Delete Here ######

PostRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    const user=await PostModel.findById({_id:id})
    const userId=user.userId
        try {
            if(userId===req.body.userId){
               await PostModel.findByIdAndDelete({_id:id})
               res.status(200).json({msg:"Deleted",user})
            }else{
                res.status(200).json({msg:"You are Not Authrozi"})
            }
            
        } catch (error) {
            res.status(400).json({msg:error.message})
        }
    })


    //// #### device #####

    PostRouter.get("/:query",async(req,res)=>{
        const {query}=req.params
        try {
            const data=await PostModel.find({device:query})
            res.status(200).json({msg:"Based On device",data})
            
        } catch (error) {
            res.status(400).json({msg:error.message})
        }
    })

    

module.exports={PostRouter}
