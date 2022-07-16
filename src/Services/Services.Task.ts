import http from "./http-common";
import { Task } from "../Interfaces/types";
import { AxiosResponse } from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const getAll = (callback: (list: Array<Task>) => void) => {
  http
    .get<Array<Task>>("/task")
    .then((response: AxiosResponse<Array<Task>>) => {
      callback(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
      callback([]);
    });
};

/*export async function getAll() {
  const { data, status } = await http.get<Array<Task>>("/task").then();
  return data;
}*/

export const create = (task: Task) => {
  console.log("crear tarea");
};

export const remove = () => {
  console.log("remover tarea");
};

export const update = () => {
  console.log("edit tarea");
};
