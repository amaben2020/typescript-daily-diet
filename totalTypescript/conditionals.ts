// The concept is similar to JavaScript’s ternary operator condition ? true : false

// passed string as an argument so it will use the type StringId while n passed number and it will return NumberId

type NumberId = {
  id: number;
};

type StringId = {
  id: string;
};

type StringOrNumber<T extends string | number> = T extends string
  ? StringId
  : NumberId;

const getId = <T extends string | number>(val: T): StringOrNumber<T> => {
  return { id: "" };
};

const s = getId("1");
const n = getId(2);
