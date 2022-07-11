import React from "react";
import "./style.css";
import { useState } from "react";
import { Task } from "../../Interfaces/types";
import { v4 as uuid } from "uuid";

interface InputTaskState {
  inputTaskValues: Task;
}

const INITIAL_STATE_TASK: Task = {
  id: "",
  tittle: "",
  description: "",
  finalized: false,
};

interface FormProps {
  onNewTask: (newTask: Task) => void;
}

const InputTask = ({ onNewTask }: FormProps) => {
  const [newTask, setNewTask] =
    useState<InputTaskState["inputTaskValues"]>(INITIAL_STATE_TASK);

  const handlerNewTask = () => {
    newTask.id = uuid();
    newTask.finalized = false;
    onNewTask(newTask);
    setNewTask(INITIAL_STATE_TASK);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className="container-form">
      <input
        placeholder="Tittle"
        type="text"
        name="tittle"
        onChange={handleChange}
        value={newTask.tittle}
      />
      <textarea
        placeholder="Description"
        name="description"
        onChange={handleChange}
        value={newTask.description}
      />
      <input
        className="button"
        type="button"
        value="Create Task"
        onClick={handlerNewTask}
      />
    </div>
  );
};

export default InputTask;
