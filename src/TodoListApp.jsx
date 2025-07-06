import React, {useState} from 'react'

const TodoListApp = () => {
    const [tasks,setTask] = useState([]);
    const [newTask,setNewTask] = useState("")

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
        
    }

    const addTask = () => {
        setTask(t => [...t,newTask])
    }

  return (
    <div>
        <h1>TODO LIST</h1>
        <div>
            <input type="text" placeholder='Enter a text...' value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index) =>
            <li key={index}>
                <span>{task}</span>

            </li> )}
        </ol>
    </div>
  )
}

export default TodoListApp