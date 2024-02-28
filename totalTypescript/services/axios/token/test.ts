import axios, { InternalAxiosRequestConfig } from "axios";

const baseURI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

baseURI.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const universalTokenFromLocalStorage = "Benzuggy";

    config.headers.Authorization = `Bearer ${universalTokenFromLocalStorage}`;

    return config;
  },
  (error) => {
    console.log("Logging", error);
  },
);

const fetcher = async (): Promise<any> => {
  try {
    const response = await baseURI.get("");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
fetcher();
