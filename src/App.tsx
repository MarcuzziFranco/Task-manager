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
      <div className="container-app">
        <h2 className="Tittle-App">Tasks Manager</h2>
        <hr />
        <InputTask onNewTask={hadlerNewTask} />
        <hr />
        <h3 className="Tittle-List">List tasks</h3>
        <ListTasks listTask={listTask} />
      </div>
    </div>
  );
}

export default App;
