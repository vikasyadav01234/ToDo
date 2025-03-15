import axios from "axios";

/******************************TaskSaveApi*****************************8 */
const saveTask = async (task, priority) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/save/task",
      { task, priority },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { saveTask };

const fetchTask = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      "http://localhost:3000/api/save/tasklist",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { fetchTask };

/*****************************************************deleteTask********************/

const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/save/deletetask/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { deleteTask };




/************************************StatusUpdate*********************/


const updateStatus=async(id,check)=>{
    const updateStatus={status:!check}
    
    try {
        const response=await axios.put(`http://localhost:3000/api/save/statusupdate/${id}`,updateStatus)
        return response.data
    } catch (error) {
        return error.response.data
    }
}



export { updateStatus }