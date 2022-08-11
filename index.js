

const express = require("express")
const postModel = require("./models/post")


const app = express()
app.use(express.json())
const postRouter = require("./routes/post")
const userRouter = require("./routes/user")



app.use("/post",postRouter)
app.use("/user",userRouter)

CONNECTION_URL = "mongodb://127.0.0.1:27017/etiquettes"


const mongoose = require("mongoose")

mongoose.connect(CONNECTION_URL,()=>{
    console.log("Connected to database")
    app.listen(5000,()=>{
        console.log("App listening on port 5000")
    })
})
