

const express = require("express")


const app = express()


app.get("/posts",(req,res)=>{    
    res.json([{title:"Post 1", author:"Ouerghie Houssem", likes:"1"},{title:"Post 1", author:"Ouerghie Houssem", likes:"1"},{title:"Post 1", author:"Ouerghie Houssem", likes:"1"}])
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

app.listen(5000,()=>{
    console.log("App listening on port 5000")
})