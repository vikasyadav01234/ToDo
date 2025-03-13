import mongoose from "mongoose";


const taskSchema=new mongoose.Schema(
    {
        task:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        User:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }
)


const UserTask=mongoose.model("UserTask",taskSchema)