import React from 'react';
import { Toaster } from 'react-hot-toast';
import CreateTask from './CreateTask.js';
import ListTask from './ListTask.js';
import './projects.css';
import Sidebar from './Sidebar.js'
import {useState, useEffect} from 'react';

const Projects = () => {
    const [tasks, setTasks] = useState([]);
    console.log("Tasks", tasks);

    // useEffect(()=>{
    //   setTasks(JSON.parse(localStorage.getItem("tasks")));
    // }, []);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(storedTasks || []);
    }, []);

  return (
    <>
    <Toaster/>
    <div className="project-section">
        <div className="project-sidebar-section"><Sidebar /></div>
        <div className="kanban-board-section">
          <CreateTask tasks={tasks} setTasks={setTasks} />
          <ListTask tasks={tasks} setTasks={setTasks} />
        </div>
    </div>
    </>
  )
}

export default Projects