// CODE

import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const PersonResult = z.object({
  name: z.string(),
});

export const fetchStarWarsPersonName = async (id: string) => {
  const data = await fetch(
    "https://www.totaltypescript.com/swapi/people/" + id + ".json",
  ).then((res) => res.json());

  const parsedData = PersonResult.parse(data);
  console.log("parsedData", parsedData);
  return parsedData.name;
};

const JSONPlaceholderSchema = z.object({
  id: z.string().or(z.number()),
  username: z.string(),
});

const fetchPlaceholder = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    const res = await response.json();

    const validatedPlaceholder = JSONPlaceholderSchema.safeParse(res);

    if (!validatedPlaceholder.success) {
      console.error("ZOD ERROR", fromZodError(validatedPlaceholder.error));
    } else {
      return validatedPlaceholder.data;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

console.log(
  "Fetch Placeholder",
  fetchPlaceholder().then((res) => {
    console.log(res);
  }),
);
