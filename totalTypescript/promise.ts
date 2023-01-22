// using the promise generics

async function getArr(a: number, b: number): Promise<[number, string]> {
  const result = await Promise.all([
    Promise.resolve(5),
    Promise.resolve('hello'),
  ]);

  return result;
}

// 👇️ [number, string]
type E = Awaited<ReturnType<typeof getArr>>;

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data: LukeSkywalker = await fetch("<https://swapi.dev/api/people/1>").then((res) => {
    return res.json();
  });

  return data;
};

console.log(fetchLukeSkywalker())