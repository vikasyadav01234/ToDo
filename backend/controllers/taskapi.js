





const saveUserTask=async(req,res)=>{
    try {

        const {task,priority}=req.body
        const newTask= await new UserTask({task:task,priority:priority,User:req.user._id})
        await newTask.save()
        res.status(200).json({success:true,message:`Task Saved Successfully`})
        
    } catch (error) {
        res.status(500).json({success:false,message:`Internal Server Error ${error}`})
        
    }
}


export { saveUserTask }