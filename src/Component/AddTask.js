import React, { useState } from 'react'
import "./Todo.css"

const AddTask = ({addTask}) => {
    const[value,setvalue]=useState("")
    const additem=()=>{
        addTask(value);
        setvalue("")
    }
  return (
    <div className='input-container'>AddTask
    <input type="text" className='input'
    placeholder='Add a  new task'
    value={value}
    onChange={(e)=>{setvalue(e.target.value);}}
    
    />
    <button onClick={additem} className='add-btn'>ADD</button>
    </div>
  )
}

export default AddTask