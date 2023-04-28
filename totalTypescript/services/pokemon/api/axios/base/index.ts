import axios from "axios";

export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

pokemonApi.interceptors.response.use(
  (res) => {
    console.log("res in interceptor", res.data);
    return res;
  },
  (err) => {
    console.log("Error", err);
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found for this endpoint`);
    }
    throw err;
  },
);
