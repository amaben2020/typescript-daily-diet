import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use((config: any) => {
  const token = "Benoski";
  config.headers.Authorization = token;

  return config;
});

const getPlaceholders = async () => {
  try {
    const response = await api.get("/todo/1");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

console.log(getPlaceholders());
