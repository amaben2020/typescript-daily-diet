// Task: Build a class that performs CRUD asynchronously, make sure its typed
// endpoint: https://jsonplaceholder.typicode.com/todos/1

import axios from "axios";

class JSONServer {
  Endpoint = "https://jsonplaceholder.typicode.com/todos" as string;
  result: Record<string, string> = {};

  async getTodos() {
    try {
      const data = await axios.get(this.Endpoint);

      if (data && data.statusText === "OK") {
        return data.data;
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  }

  async getTodo(param: number) {
    try {
      const data = await axios.get(this.Endpoint + `/${param}`);

      if (data && data.statusText === "OK") {
        return data.data;
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
    }
  }

  async deleteTodo(param: number) {
    if (param && typeof param === "number") {
      const todo = await axios.delete(this.Endpoint + `/${param}`);

      console.log("deleted todo", todo);

      if (todo.statusText === "OK") {
        const viewArrayWithoutDeleted = await this.getTodo(param);
        console.log(
          "New Todo",
          `${viewArrayWithoutDeleted.id} has been deleted`,
        );
      } else {
        throw new Error("Invalid");
      }
    }
  }

  async createTodo(body: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }) {
    try {
      if (body) {
        const data = await axios.post(this.Endpoint, body);
        if (data.status >= 200 && data.status <= 299) {
          console.log("full data", data);
          console.log("status", data.status);
          console.log("Todo created");
        }
      }
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  }

  async updateTodo(id: number) {
    try {
      const data = await axios.put(this.Endpoint + `/${id}`, {
        title: "My name is Benneth",
      });
      console.log("Success", data);
    } catch (error) {
      console.log(error);
    }
  }
}

const jsonService = new JSONServer();
const body = {
  userId: 1,
  id: 210,
  title: "illo est ratione doloremque quia maiores aut",
  completed: true,
};

// jsonService.createTodo(body);
jsonService.updateTodo(2);

const obj = {
  name: "Me",
  age: 30,
};

const updateMe = (object: { [key: string]: number | string }) => {
  return {
    ...object,
    ["age"]: 31,
  };
};

console.log("onClick", updateMe(obj));

const props = {
  country: "CA",
  ...obj,
};

const flags = {
  CA: "🔥",
};

if (props.country) {
  const countryFlag = String(props.country);
  console.log(flags["CA"]);
}
