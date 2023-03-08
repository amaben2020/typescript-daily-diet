import axios from "axios";

type TUser = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const URL = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (): Promise<TUser | undefined> => {
  try {
    const { data }: Awaited<{ data: TUser }> = await axios.get(URL);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// const info: Awaited<ReturnType<typeof fetchData>> = fetchData();
console.log(fetchData());

const myInfo = {
  name: "Ben",
};

type Images<S, N> = {
  node: {
    originalSrc: S;
    altText: S;
    width: N;
    height: N;
  };
}[];

const images = [
  {
    node: {
      originalSrc: "Men-Jacket-Front-Black__15466.1603283963.png",
      altText: "",
      width: 2048,
      height: 2048,
    },
  },
  {
    node: {
      originalSrc: "Men-Jacket-Side-Black__68202.1603283961.png",
      altText: "",
      width: 2048,
      height: 2048,
    },
  },
  {
    node: {
      originalSrc: "Men-Jacket-Back-Black__33864.1603283963.png",
      altText: "",
      width: 2048,
      height: 2048,
    },
  },
  {
    node: {
      originalSrc: "Men-Jacket-Front-White__95300.1603283963.png",
      altText: "",
      width: 2048,
      height: 2048,
    },
  },
  {
    node: {
      originalSrc: "Men-Jacket-Side-White__91924.1603283962.png",
      altText: "",
      width: 2048,
      height: 2048,
    },
  },
  {
    node: {
      originalSrc: "Men-Jacket-Back-White__02866.1603283963.png",
      altText: "",
      width: 2048,
      height: 2048,
    },
  },
] satisfies Images<string, number>;

const normalizer = (array: Images<string, number>): boolean | string[] => {
  return [...array].map((elem) => elem.node["originalSrc"]);
};

console.log(normalizer(images));

type TData = { data: Record<string, string | number | string[]>[] };
const fetchProducts = async (): Promise<
  Record<string, string | number | string[]>[] | undefined
> => {
  try {
    const { data }: Awaited<TData> = await axios.get(
      "http://localhost:3004/products",
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("404")) {
        throw new Error("Please check the url");
      }
    }
  }
};

console.log(fetchProducts());
