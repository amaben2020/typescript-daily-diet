import axios, { InternalAxiosRequestConfig } from "axios";

const baseURI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

baseURI.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const universalTokenFromLocalStorage = "Benzuggy";

    config.headers.Authorization = `Bearer ${universalTokenFromLocalStorage}`;
    config.headers.Accept = "application/json";
    return config;
  },
  (error) => {
    console.log("Logging", error);
  },
);

const fetcher = async (): Promise<
  | {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }
  | undefined
> => {
  try {
    const {
      data,
    }: Awaited<{
      data: {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
      };
    }> = await baseURI.get("/todos");
    console.log("DATA", data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
fetcher();
