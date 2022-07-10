import React from "react";
import "./style.css";
import { useState } from "react";
import { Task } from "../../Interfaces/types";

interface InputTaskState {
  inputTaskValues: Task;
}

const INITIAL_STATE_TASK: Task = {
  tittle: "",
  description: "",
};

interface FormProps {
  onNewTask: (newTask: Task) => void;
}

const InputTask = ({ onNewTask }: FormProps) => {
  const [newTask, setNewTask] =
    useState<InputTaskState["inputTaskValues"]>(INITIAL_STATE_TASK);

  const handlerNewTask = (e: React.MouseEvent<HTMLInputElement>) => {
    onNewTask(newTask);
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
      />
      <textarea
        placeholder="Description"
        name="description"
        onChange={handleChange}
      />
      <input type="button" value="Create Task" onClick={handlerNewTask} />
    </div>
  );
};

export default InputTask;
