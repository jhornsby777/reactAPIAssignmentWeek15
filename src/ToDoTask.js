import React from 'react'
import {deleteData , updateData} from './APICalls';

export default function ToDoTask({toDoObject , setToDoData}) {
  return (
    <div>
      <p>{toDoObject.name} - {toDoObject.done ? 'Task complete' : 'Task not complete'}</p>
          <button onClick={ () =>{
            updateData(toDoObject , setToDoData)
          }}>Update To Done</button>
          <button onClick={ () =>{
            deleteData(toDoObject._id , setToDoData)
          }}>Delete</button>
    </div>
  )
}
