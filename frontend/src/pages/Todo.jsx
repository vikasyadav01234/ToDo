import React, { useEffect, useState } from "react";
import { deleteTask, fetchTask, saveTask, updateStatus } from "../api/api.js";

function Todo() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [showError, setShowError] = useState("");
  const [deleteMessage,setDeleteMessage]=useState('')


  //update the input field
  const handleTextChange = (e) => {
    setText(e.target.value);
  };



  //updating the priority in user input
  const handleOnPriorityChange = (e) => {
    setPriority(e.target.value);
  };


  //fething the task as soon as page render
  useEffect(() => {
    getUserTaskList();
  }, []);

  //function to fetch the user task list as soon as page load
  const getUserTaskList = async () => {
    const response = await fetchTask();
    if (!response.success) {
      return;
    }
    const theList = response.task;
    
    setTask(theList.map((e)=>({
      id:e.id,
      task:e.task,
      priority:e.priority,
      status:e.status
    })))
  };


  //add the task in DB as re-render the list
  const handleOnAdd = async (e) => {
    e.preventDefault();
    const response = await saveTask(text, priority);

    if (!response.success) {
      setShowError(`Error ! couldn't save task .please try again`);
      return;
    }
    getUserTaskList();
    setText("");
  };



      //delete the task

      const handleOnDelete=async(id)=>{
        
        
        const response=await deleteTask(id)
        
        if(!response.success){
          setDeleteMessage("")
          return;
        }
  
        setTask((prev)=>prev.filter((task)=>task.id !==id))
        setDeleteMessage(response.message)
      }



      const handleOnCheck=async(id,check)=>{
        const response=await updateStatus(id,check)
        if(!response.success){
          return;
        }
        getUserTaskList()
        return;
      }
    


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="container max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Add Task Section */}
        <div className="addtask flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter a new task..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={priority}
            onChange={handleOnPriorityChange}
            className="px-4 py-2 border rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button
            onClick={handleOnAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Add
          </button>
          <p>{showError}</p>
        </div>

        {/* Task List Section */}
        <div className="tasklist mt-6 space-y-4">
          {task.map((eachTask) => (
            <div
              key={eachTask.id}
              className="card bg-gray-50 p-4 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between"
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  Task: {eachTask.task}
                </p>
                
                <p
                  className={`text-sm font-medium ${
                    eachTask.priority === "High"
                      ? "text-red-500"
                      : eachTask.priority === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Priority: {eachTask.priority}
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                { eachTask && (
                <input type="checkbox" checked={eachTask.status}  onChange={()=>{handleOnCheck(eachTask.id,eachTask.status)}} className="w-5 h-5" />)}
                <button onClick={()=>{handleOnDelete(eachTask.id)}} className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
