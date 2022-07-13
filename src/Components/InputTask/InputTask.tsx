import React from "react";
import "./style.css";
import { useState } from "react";
import { Task } from "../../Interfaces/types";
import { v4 as uuid } from "uuid";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface FormState {
  inputTaskValues: Task;
  error: boolean;
}

const INITIAL_STATE_TASK: Task = {
  id: "",
  tittle: "",
  description: "",
  priorityLevel: "",
  finalized: false,
};

interface FormProps {
  onNewTask: (newTask: Task) => void;
}

const InputTask = ({ onNewTask }: FormProps) => {
  const [newTask, setNewTask] =
    useState<FormState["inputTaskValues"]>(INITIAL_STATE_TASK);
  const [error, setError] = useState<FormState["error"]>(false);

  const handlerNewTask = () => {
    if (newTask.tittle === "" && newTask.description === "") {
      setError(true);
    } else {
      newTask.id = uuid();
      newTask.finalized = false;
      onNewTask(newTask);
      setNewTask(INITIAL_STATE_TASK);
      setError(false);
    }
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
      <ErrorMessage error={error} />
    </div>
  );
};

export default InputTask;
