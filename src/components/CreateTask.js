import React from 'react';
import {useState} from 'react';
import toast from "react-hot-toast";
import './createTask.css';
const { v4: uuidv4 } = require('uuid');

const CreateTask = ({tasks = [], setTasks}) => {
    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo", //can also be inprogress or completed
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        //check for task length to allow or disallow creation
        if(task.name.length < 3) return toast.error("Task must be more than 3 characters!");
        if(task.name.length > 100) return toast.error("Task is too long!")
        
        //add new task to the existing list of tasks stored in local storage
        const updatedTask = { ...task, id: uuidv4() }; 
        setTasks((prev) => {
            const list = [...prev, updatedTask];
            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
        });
        //showing a popup message after successful task creation
        toast.success("Task successfully created!");

        setTask({
            id: "",
            name: "",
            status: "todo",
        })
    };

  return (
    <form className="create-task-form" onSubmit={handleSubmit}>
        <input type="text" className="create-task-field" onChange={(e)=> setTask({...task, id: uuidv4(), name:e.target.value})} value={task.name} placeholder="Create a new task"/>
        <button className="submit-btn">Create</button>
    </form>
  )
}

export default CreateTask