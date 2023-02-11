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
