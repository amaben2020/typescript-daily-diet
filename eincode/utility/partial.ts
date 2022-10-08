//Constructs a type with all properties of Type set to optional. 

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//add a new item tpo product
const product = {
  name: "Mug",
  id: 0,
  category: "Home",
  sold: true
}

type TProduct = {
  name: string;
  id: number;
  category: string;
  sold: boolean;
}
type TItem = Partial<TProduct>

const updateProduct = (product: TProduct, item: TItem) => ({ ...product, ...item })
console.log(updateProduct(product, { sold: false }))