const mongoose=require('mongoose');
const Schema= mongoose.Schema
const LikeSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Post"
    },


});
modules.export=mongoose.export("Like",LikeSchema);