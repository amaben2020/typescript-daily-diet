import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson), // results: [{name: ""}, {name: ""}]
});

export const fetchStarWarsPeople = async () => {
  const data = await fetch("https://swapi.dev/api/people/").then((res) =>
    res.json(),
  );

  const parsedData = StarWarsPeopleResults.parse(data);

  return parsedData.results;
};

const logStarWarsPeopleResults = (
  data: z.infer<typeof StarWarsPeopleResults>,
) => {
  //                                    ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};
