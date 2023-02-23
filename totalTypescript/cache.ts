// Techniques for Typing Dynamic Object Keys

// Record type: allows us add any number of key and property to an object at runtime

//Index of an object is the key

//Interface/Type

const createCache = () => {
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

console.log(createCache().add("a", "b"));
console.log(createCache().cache);

//("Matt")

const adder = (a: string, b: number) => {
  const object: Record<string, number> = {};
  return (object[a] = b);
};
console.log(adder("123", 33));

// I'm using Record because i don't know what age would be
// const mySelf: Record<string, number | string> = {
//   name: "self",
// };

// mySelf["age"] = 30;

// console.log(mySelf);

const cacher = () => {
  const cache: { [key: string]: string | number } = {};

  const read = (key: string) => {
    if (cache[key] !== undefined) {
      return (cache["undefined"] = "undefined");
    }
    return cache[key];
  };

  const add = (key: string, value: number) => {
    return (cache[key] = value);
  };

  const remove = (key: string, value: number) => {
    return delete cache[key];
  };

  return {
    add,
    remove,
    read,
    cache,
  };
};

console.log(cacher().cache);

type THygraphData = {
  sidebars: Record<string, string | { id: string }[]>[];
};

const objectToAlgolia: THygraphData = {
  sidebars: [
    { title: "first link", slug: "first-link", icon: [{ id: "" }] },
    { title: "Third title", slug: "third-title", icon: [{ id: "" }] },
  ],
};

// how can we convert this to an array that algolia wants?

const mapDataToAlgolia = (object: THygraphData) => {
  return [...object.sidebars].map((elem) => ({
    objectID: String(elem.slug).split("-")[0],
    ...elem,
  }));
};

console.log("Maped", mapDataToAlgolia(objectToAlgolia));

const paths = [
  { data: { url: "/" } },
  { data: { url: "/page-ben" } },
  { data: { url: "/page-jan" } },
  { data: { url: "/demo" } },
  { data: { url: "/qa" } },
];

const handlePaths = (paths: Array<Record<string, { url: string }>>) => {
  return paths.map((path) => path.data.url);
};

console.log(handlePaths(paths));
