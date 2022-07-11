import { Task } from "../../Interfaces/types";
import CardTask from "../CardTask/CardTask";
import "./style.css";

interface Props {
  listTask: Array<Task>;
}

export default function ListTasks({ listTask }: Props) {
  return (
    <ul>
      {listTask.map((item) => {
        return (
          <li>
            <CardTask task={item} />
          </li>
        );
      })}
    </ul>
  );
}
