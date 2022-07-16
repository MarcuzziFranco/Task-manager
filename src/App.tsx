import { useEffect, useState } from "react";
import "./App.css";
import ListTasks from "./Components/ListTasks/ListTasks";
import { Task } from "../src/Interfaces/types";
import InputTask from "./Components/InputTask/InputTask";
import { getAll, create } from "./Services/Services.Task";

interface AppState {
  listTask: Task[];
}

function App() {
  const [listTask, setListTask] = useState<AppState["listTask"]>([]);

  useEffect(() => {
    console.log("ejecuta");
    getAll(handlerLoadListTask);
  }, []);

  const hadlerNewTask = (newTask: Task): void => {
    console.log(newTask);
    create(newTask);
    setListTask((listTask) => [...listTask, newTask]);
  };

  const handlerLoadListTask = (response: Array<Task>) => {
    setListTask(response);
  };

  return (
    <div className="App">
      <div className="NavBar">
        <h2 className="Tittle-App">Tasks Manager</h2>
      </div>
      <div className="container-app">
        <div className="container-right">
          <h3 className="Tittle-List">Entry data task</h3>
          <InputTask onNewTask={hadlerNewTask} />
        </div>
        <div className="container-left">
          <h3 className="Tittle-List">List tasks</h3>
          <ListTasks listTask={listTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
