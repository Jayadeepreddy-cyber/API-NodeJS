const mongoose=require('mongoose');
const Schema= mongoose.Schema
const PostSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
   title: {
    type:String,
    required:true

    },
    body:{
        type:String
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref:"like"
    }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:"comments"

    }]},
    {timestamps:true}

);
module.exports=mongoose.model("Post",PostSchema);