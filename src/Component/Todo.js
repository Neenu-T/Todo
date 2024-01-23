import React, { useState, useEffect } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import "./Todo.css"

const Todo = () => {
    const[tasks,setTask]=useState([
        // {title:"learn-js"},
        // {title:"learn-css"},
        // {title:"learn-html"},
    ]);
    useEffect(()=>{
        document.title=`you have ${tasks.length}pending task(s)`;
    }
    )
    const addTask=(title)=>{
        const newTask=[...tasks,{title}]
        setTask(newTask)
    }
    const removeTask=(index)=>{
        const newTask=[...tasks]
        newTask.splice(index,1)
        setTask(newTask)
    }
  return (
    <>
        <div className='todo-container'>
            <div className='header'>Todo App</div>
           
       
      <div className='addtask'>
      <AddTask addTask={addTask}/>
      </div>
      <div > 
      {tasks.map((task,index)=>(     
      <ListTask task={task} removeTask={removeTask}
      index={index} key={index}

      />
      ))}
      </div>
      
        </div>
    </>
  )
}


export default Todo