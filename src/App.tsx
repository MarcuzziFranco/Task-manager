import React, { MouseEventHandler, useState } from 'react'
import './App.css'


interface AppState{
  message:String
  inputTask:Task
  listTask: Task[]
  //lisTask: Array<Task>
}

const INITIAL_STATE_TASK:Task ={
  tittle: 'mock_tittle',
  description: 'mock_description'
}


interface Task {
  tittle:string
  description:string
}

function App() {

  //const [ListTasks,setTaskList] = useState<Task[]>([])
  const [newTask,setNewTask] = useState<AppState["inputTask"]>(INITIAL_STATE_TASK);
  const [listTask,setListTask] = useState<AppState["listTask"]>([])
  const [message,setMessage] = useState<AppState["message"]>('')

  const clickHandler = (e:React.MouseEvent<HTMLInputElement>) =>{
    console.log(newTask.tittle)
    console.log(newTask.description)
    
    setListTask(listTask => [...listTask,newTask])

  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{
    const {value,name} = e.target
    setNewTask({...newTask,[name]:value})
  }

  return (
     <div className="App">
     <div>Task Manager</div>
     <div>
        <input placeholder="Tittle"  type="text" name='tittle' onChange={handleChange}/>
        <textarea  placeholder="Description" name='description' onChange={handleChange}/> 
        <input type="button" value = "Create Task" onClick={clickHandler} />
     </div>
     <div>---------------------------</div>
     <div>List tasks</div>
     <div>
        <ul>
          {
            listTask.map ( item => {
              return (<li>
                <div>{item.tittle}{item.description}</div>
              </li>)
            })
          }
        </ul>
     </div>
    </div>
  )
}

export default App
