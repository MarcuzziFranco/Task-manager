import { Task } from "../../Interfaces/types";
import { remove } from "../../Services/Services.Task";
import iconRemove from "../../public/remove.svg";
import iconDelete from "../../public/edit.svg";
import "./style.css";

interface Props {
  task: Task;
}

export default function CardTask({ task }: Props) {
  return (
    <div className="container">
      <div className="container-card">
        <div className="container-tittle">
          <h4 className="tittle">{task.tittle} </h4>
          <img className="icon" src={iconRemove} onClick={remove} />
          <img className="icon" src={iconDelete} onClick={remove} />
        </div>
        <div className="container-description">
          <p className="description">{task.description}</p>
        </div>
      </div>
    </div>
  );
}
