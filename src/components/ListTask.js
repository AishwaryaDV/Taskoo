import React from 'react';
import {useState, useEffect} from 'react';

const ListTask = ({tasks, setTasks}) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        //getting an array with the filtered tasks 
        

    },[tasks])

  return (
    <div>ListTask</div>
  )
}

export default ListTask