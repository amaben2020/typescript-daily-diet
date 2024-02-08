//Adapter is there to format data to what frontend needs

import { TodosService } from "../services";

class TodosAdapter {
  private todosService: TodosService;
  constructor(todosApi: TodosService) {
    this.todosService = todosApi;
  }

  async getTodosWithId() {
    try {
      const todos = await this.todosService.getTodos();
    } catch (error) {
      console.log("error", error);
    }
  }
}

const todosService = new TodosService();
console.log("todosService", todosService);
const todosAdapter = new TodosAdapter(todosService);

const getTd = async () => {
  try {
    const resp = await todosAdapter.getTodosWithId();
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

console.log(getTd());
