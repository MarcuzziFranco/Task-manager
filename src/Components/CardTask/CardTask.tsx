import { Task } from "../../Interfaces/types";

export default function CardTask(task: Task) {
  return (
    <div>
      <h4>{task.tittle} </h4>
      <p>{task.description}</p>
    </div>
  );
}
