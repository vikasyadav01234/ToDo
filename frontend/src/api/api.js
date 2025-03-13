import axios from "axios"





/******************************TaskSaveApi*****************************8 */
const saveTask=async(task,priority)=>{
    try {
        const response=await axios.post(
            "http://localhost:3000/api/save/task",
            {task,priority},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        return response.data
        
    } catch (error) {
        console.log(`Error in saveTask ${error}`)
        
    }
}



export { saveTask }