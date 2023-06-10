const express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/user.routes")
const { PostRouter } = require("./Routes/post.routes")

const app=express()
app.use(express.json())

app.use("/users",userRouter)
app.use("/posts",PostRouter)



app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(">>>>>>>>>>Connected To The DataBase>>>>>>>>>>")
    } catch (error) {
        
    }
   
})