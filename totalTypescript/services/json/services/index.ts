import axios from "axios";
import { TTodosAdapter } from "../adapter";

export class TodosService {
  async getTodos(): Promise<TTodosAdapter[]> {
    return await axios.get("https://jsonplaceholder.typicode.com/todos");
  }
}
