"use client"

import React from 'react'
import { useState } from 'react';


// let Item = {
//     title: String,
//     cost: Number,
//     numPersons: Number,
// }

const Receipt = () => {

  const [task, setTask] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };


  return (
  <div>
    <form onSubmit={inputSubmit}>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default Receipt