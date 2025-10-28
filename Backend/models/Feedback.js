import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema ({
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
    },
    name : {
        type : String ,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    }, 
    message : {
        type : String , 
        required : true,
    },
    createAt : {
        type : Date ,
        default : Date.now,
        
    },
})

export default mongoose.Schema("Feedback" , FeedbackSchema)