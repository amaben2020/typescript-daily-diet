import axios from "axios";
// interceptors are just

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// request: i need only results tailored towards this.
// setting token the interceptors way
api.interceptors.request.use(
  (config: any) => {
    const token = "Benoski";
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);

const getPlaceholders = async () => {
  try {
    const response = await api.get("");
    console.log(response.request);
    return response;
  } catch (error) {
    console.log(error);
  }
};

console.log(getPlaceholders());

// setting token the authorization way
export function setToken(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  if (typeof window !== "undefined") {
    localStorage.setItem("TOKEN_KEY", token);
  }
}
