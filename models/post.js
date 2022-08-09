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



const postModel = mongoose.Model("posts",postSchema)


export default postModel