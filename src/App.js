import logo from './logo.svg';
import { readData} from './APICalls';
import { useEffect, useState } from 'react';
import ToDoTask from './ToDoTask';
import './App.css';
import NewItemForm from './NewItemForm';

function App() {

  const [toDoData, setToDoData] = useState([])

  const [formData, setFormData] = useState('')

  useEffect(() => {
    readData(setToDoData);

  }, [])
  return (
    <div>{toDoData.map((toDoObject) => {
      return (
        <div>
          <ToDoTask toDoObject={toDoObject} setToDoData={setToDoData}></ToDoTask>
        </div>
      )
    })}
      <NewItemForm formData={formData} setFormData={setFormData} setToDoData={setToDoData}></NewItemForm>
    </div>
  )
}

export default App;
