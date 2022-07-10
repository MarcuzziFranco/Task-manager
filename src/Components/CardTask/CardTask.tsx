import { Task } from "../../Interfaces/types";
import "./style.css";

export default function CardTask(task: Task) {
  return (
    <div className="container-card">
      <h4 className="container-tittle">{task.tittle} </h4>
      <p className="container-description">{task.description}</p>
    </div>
  );
}
