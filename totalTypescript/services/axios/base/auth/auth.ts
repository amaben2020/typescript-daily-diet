import axios, { AxiosRequestConfig } from "axios";

const authApi = axios.create({
  baseURL: "https://api.example.com/",
  timeout: 5000,
});

const token = sessionStorage.getItem("jwt");

if (token) {
  authApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await authApi(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
