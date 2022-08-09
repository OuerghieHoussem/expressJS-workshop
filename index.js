

const express = require("express")
const postModel = require("./models/post")
const mongoose = require("mongoose")

const app = express()
const postRouter = require("./routes/post")
const userRouter = require("./routes/user")



app.use("/post",postRouter)
app.use("/user",userRouter)

CONNECTION_URL = "mongodb://127.0.0.1:27017/etiquettes"

mongoose.connect(CONNECTION_URL,()=>{
    console.log("Connected to database")
    app.listen(5000,()=>{
        console.log("App listening on port 5000")
    })
})
