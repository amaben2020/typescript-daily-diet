interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

const todo: Omit<Todo, "createdAt"> = {
  title: 'Create stuff',
  description: '',
  completed: false,
}
