import { Task } from "../Interfaces/types";
import axios, {AxiosResponse} from 'axios';

export const getAll = ():Array<Task> => {
  console.log("Ejecucion Servicio")
  const headers = {
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  };
axios.get('http://localhost:3001/api/task', { headers })
    .then((response:AxiosResponse<Array<Task>>) => console.log(response.data));
  return new Array<Task>;
}

export const create = (task: Task) => {
  console.log("crear tarea");
};

export const remove = () => {
  console.log("remover tarea");
};

export const update = () => {
  console.log("edit tarea");
};
