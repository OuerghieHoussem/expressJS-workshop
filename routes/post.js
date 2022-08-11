const express = require("express")
const postModel = require("../models/post")

const postRouter = express.Router()


postRouter.get("/",(req,res)=>{
    postModel.find({}).then((posts)=>{
        res.status(200).json(posts)
    }).catch((error)=>{
        res.status(400).json({error:"An error occured"})
    })
})


postRouter.post("/",(req,res)=>{
    const {postData} = req.body
    
    postModel.create(postData).then((newPost)=>{
        res.status(200).json(newPost)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json({error:"An error occured"})
    })
})


postRouter.put("/:id",(req,res)=>{
    const {id} = req.params
    const {newPostData} = req.body
    postModel.findByIdAndUpdate(id,newPostData,{new:true}).then((newPost)=>{
        res.status(200).json(newPost)
    }).catch((error)=>{
        res.status(400).json({error:"An error occured"})
    })
})

postRouter.delete("/:id",(req,res)=>{
    const {id} = req.params

    postModel.findByIdAndDelete(id).then((post)=>{
        res.status(200).json(post)
    }).catch(error=>{
        res.status(400).json({error:"An error occured"})
    })
})

module.exports = postRouter