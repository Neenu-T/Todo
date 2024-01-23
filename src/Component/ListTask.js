import React from 'react'
import "./Todo.css"

const ListTask = ({task,index,removeTask}) => {
  return (
    <div className='list-tasks'>
        {task.title}
        <button onClick={()=>{removeTask(index)}} className='dlt'>Delete</button>
    </div>
  )
}

export default ListTask