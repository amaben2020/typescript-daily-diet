import { pokemonApi } from "./base";

const fetchPokemon = async (name: string) => {
  try {
    const { data } = await pokemonApi.get(`berry/${name}`);
    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

const pokemon = fetchPokemon("berri");
console.log("Pokemon", pokemon);
