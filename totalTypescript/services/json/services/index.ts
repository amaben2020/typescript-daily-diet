import axios from "axios";

export class TodosService {
  async getTodos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(response);
  }
}
