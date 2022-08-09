const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    likes:{
        type:Number,
        default:0
    }
})



const postModel = mongoose.model("posts",postSchema)


module.exports = postModel