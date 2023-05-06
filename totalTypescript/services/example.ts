import axios from "axios";

type TAxiosData = Awaited<Record<string, string>>;

class Example {
  async getTodo(): Promise<TAxiosData> {
    const { data }: { data: TAxiosData } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );

    console.log("DATA FROM TODO ENDPOINT", data);

    return data;
  }
}

const example = new Example();

console.log(example.getTodo());
