import { Task } from "../../Interfaces/types";
import CardTask from "../CardTask/CardTask";

interface Props {
  listTask: Array<Task>;
}

export default function ListTasks({ listTask }: Props) {
  return (
    <ul>
      {listTask.map((item) => {
        return (
          <li>
            <CardTask tittle={item.tittle} description={item.description} />
          </li>
        );
      })}
    </ul>
  );
}
