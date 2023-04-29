// https://pokeapi.co/docs/v2#berries-section

import { pokemonApi } from "./base";

const fetchPokemon = async (name: string) => {
  try {
    const { data } = await pokemonApi.get(`berry-firmness/${name}`);
    console.log(
      "WACAN",
      data.berries.find((b: { [key: string]: string }) => b.name === "wacan"),
    );
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

const pokemon = fetchPokemon("very-soft");
console.log("Pokemon", pokemon);
