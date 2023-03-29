import { data } from "../data";
// using the promise generics

// how to type return type of async function: we can use the Awaited type to unwrap the promise and get the type of what the promise resolves to:
// type Response = Awaited<ReturnType<typeof getArr>>;

// async function getArr(a: number, b: number): Promise<[number, string]> {
//   const result: Response = await Promise.all([
//     Promise.resolve(5),
//     Promise.resolve("hello"),
//   ]);

//   return result;
// }

// 👇️ [number, string]
// type E = Awaited<ReturnType<typeof getArr>>;

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
}

const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1",
  ).then((res) => {
    return res.json();
  });

  return data;
};

const renderInfo = async () => {
  try {
    const data = await fetchLukeSkywalker();
    console.log("Data", data);

    for (const films of data.films) {
      const result = await Promise.all([
        (await fetch(films.toString())).json(),
      ]);

      console.log("result", result);
    }
  } catch (error) {
    console.log(error);
  }
};
console.log(renderInfo());

const products = new Promise((res, rej) => {
  if (data.length) {
    res(data);
  }
  rej("Data not found");
});

const logProduct = async () => {
  try {
    const data = await products;
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
console.log("product", logProduct());
