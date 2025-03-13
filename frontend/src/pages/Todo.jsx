import React, { useState } from "react";
import { saveTask } from "../api/api";

function Todo() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [showError,setShowError]=useState('')

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleOnPriorityChange=(e)=>{
    setPriority(e.target.value)
  }

  const handleOnAdd=async(e)=>{
    e.preventDefault()

    const theTask={id:task.length+1,task:text,priority:priority}
    const response =await saveTask(text,priority)

    if(!response.success){
      setShowError(`Error ! couldn't save task .please try again`)
      return;
      
    }
    setTask([...task,theTask])
    setText('')
    setPriority('')
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
            <div key={eachTask.id} className="card bg-gray-50 p-4 rounded-lg shadow flex flex-col sm:flex-row items-center justify-between">
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Task: {eachTask.task}</p>
                <p className={`text-sm font-medium ${eachTask.priority === "High" ? "text-red-500" : eachTask.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                  Priority: {eachTask.priority}
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                <input type="checkbox" className="w-5 h-5" />
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
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
