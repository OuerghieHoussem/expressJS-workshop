

const express = require("express")
const postModel = require("./models/post")
const mongoose = require("mongoose")

const app = express()



app.get("/posts",(req,res)=>{    
    
    postModel.find({}).then((posts)=>{

        res.json(posts)
    })
    

})
app.get("/post/:id",(req,res)=>{
    res.json({title:"Post 1", author:"Ouerghie Houssem", likes:"1"})
})
app.post("/post",(req,res)=>{
    const {title, author} = req.body

    console.log({title, author})


    res.json({title, author, likes:0})
})
app.put("/post/:id",(req,res)=>{
    const {title, author} = req.body
    const {id} = req.params

    console.log({title, author})


    res.json({title, author, likes:0})
})

app.delete("/post/:id",(req,res)=>{
    const {id} = req.params

    console.log({title, author})


    res.json({title, author, likes:0})
})

app.get("/users",(req,res)=>{
    
})
app.get("/user/:id",(req,res)=>{
    
})
app.post("/user",(req,res)=>{
    
})
app.put("/user/:id",(req,res)=>{
    
})
app.delete("/user/:id",(req,res)=>{
    
})


CONNECTION_URL = "mongodb://127.0.0.1:27017/etiquettes"

mongoose.connect(CONNECTION_URL,()=>{
    console.log("Connected to database")
    app.listen(5000,()=>{
        console.log("App listening on port 5000")
    })
})
