//Adapter is there to format data to what frontend needs

import { TodosService } from "../services";

export type TTodosAdapter = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
class TodosAdapter {
  private todosService: TodosService;
  constructor(todosApi: TodosService) {
    this.todosService = todosApi;
  }

  async getTodosWithId() {
    try {
      const todos: Awaited<TTodosAdapter[]> =
        await this.todosService.getTodos();

      return todos.map((todo) => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      }));
    } catch (error) {
      console.log("error", error);
    }
  }
}

const todosService = new TodosService();
console.log("todosService", todosService);

//dep injection
const todosAdapter = new TodosAdapter(todosService);

// usage in frontend
const getTdInFE = async () => {
  try {
    const resp = await todosAdapter.getTodosWithId();
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

console.log(getTdInFE());
