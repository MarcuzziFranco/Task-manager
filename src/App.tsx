import React, { Component, MouseEventHandler, useState } from "react";
import "./App.css";
import ListTasks from "./Components/ListTasks/ListTasks";
import { Task } from "../src/Interfaces/types";
import InputTask from "./Components/InputTask/InputTask";

interface AppState {
  listTask: Task[];
}

function App() {
  const [listTask, setListTask] = useState<AppState["listTask"]>([]);

  const hadlerNewTask = (newTask: Task): void => {
    setListTask((listTask) => [...listTask, newTask]);
  };

  return (
    <div className="App">
      <div>Task Manager</div>
      <div>
        <InputTask onNewTask={hadlerNewTask} />
      </div>
      <div>List tasks</div>
      <ListTasks listTask={listTask} />
    </div>
  );
}

export default App;
