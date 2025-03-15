import { response } from "express";
import { UserTask } from "../models/task.model.js";

const saveUserTask = async (req, res) => {
  try {
    const { task, priority } = req.body;
    const newTask = new UserTask({
      task: task,
      priority: priority,
      User: req.user._id,
    });
    await newTask.save();
    res.status(200).json({ success: true, message: `Task Saved Successfully` });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Internal Server Error ${error}` });
  }
};

export { saveUserTask };

/******************************************fetchApi******************/

const getUserTask = async (req, res) => {
  const id = req.user._id;
  try {
    const allTask = await UserTask.find({ User: id });
    if (!allTask) {
      return res.status(401).json({ success: false, message: `No Task Added` });
    }
    const filteredTask = allTask.map((task) => ({
        id:task._id,
      task: task.task,
      priority: task.priority,
      status:task.status
    }));
    console.log(filteredTask);
    return res.status(200).json({
      success: true,
      message: `Task Fetched Successfully and`,
      task: filteredTask
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Internal Server Error ${error}` });
  }
};

export { getUserTask };











/***********************************deleteTheTask********************/


const deleteTheTask=async(req,res)=>{
    try {
        const id=req.params.id
    if(!id){
        return res.status(401).json({success:false,message:`couldn't delete as technial issue !please refresh the page`})
    }
    const removeTask=await UserTask.deleteOne({_id:id})
    return res.status(200).json({success:true,message:`Deleted Successfully`})
    } catch (error) {
        return res.status(500).json({success:false,message:`Internal Server Error`})
        
    }
}



export { deleteTheTask }







const statusUpdate=async(req,res)=>{
    try {
        const id=req.params.id
        console.log(id)
        const {status}=req.body
        console.log(status)
        if(!id){
            return res.status(401).json({success:false,message:`Login Expired! Please Login again`})
        }
        const updating=await UserTask.updateOne({_id:id},{$set:{status:status}})
        
        return res.status(200).json({success:true,message:`Status Updated`})
    } catch (error) {
        return res.status(500).json({success:false,message:`Internal server Error: ${error}`})
    }
}


export { statusUpdate }