import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

type T1 = Parameters<(id: number) => void>;

class Typicode {
  id: number | undefined;

  constructor(id?: number) {
    this.id = id;
  }

  async getTodos(): Promise<Record<string, string | number | boolean>> {
    try {
      const {
        data,
      }: {
        data: Awaited<{
          userId: number;
          id: number;
          title: string;
          completed: boolean;
        }>;
      } = await axios.get(ENDPOINT);
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof Error) console.log(error);
      throw new SyntaxError();
    } finally {
      console.log("Function called");
    }
  }

  async getTodo(id: number) {
    try {
      const data = await axios.get(`${ENDPOINT}/${id}`);
      if (data.statusText === "OK") {
        return data;
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
      throw new Error();
    } finally {
      console.log("Function called");
    }
  }

  async deleteTodo() {
    try {
      const data = await axios.delete(`${ENDPOINT}/${this.id}`);

      if (data.statusText === "OK") {
        console.log("Data", data);
        return data;
      }
    } catch (error) {
      if (error instanceof Error) console.log(error);
      throw new Error();
    } finally {
      console.log("Function called");
    }
  }
}

// not so cool because
const typicode = new Typicode(5).deleteTodo();
console.log("Typicode", typicode);
