import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
//https://axios-http.com/docs/interceptors
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

baseURI.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("LESP", response);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error);
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
