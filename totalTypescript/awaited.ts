import axios from "axios";

type TUser = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const URL = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (): Promise<TUser | undefined> => {
  try {
    const { data }: Awaited<{ data: TUser }> = await axios.get(URL);
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const info: Awaited<ReturnType<typeof fetchData>> = fetchData();
console.log(fetchData());
