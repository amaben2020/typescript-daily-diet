//https://typehero.dev/tracks/typescript-foundations

// in 5 mins, build a generic row function that could take a number or string as value

type TRow<T> = {
  value: T;
  name: string;
};

const handleRow = <T extends string | number>({ value, name }: TRow<T>) => {
  return { value, name };
};

console.log(
  handleRow<number>({
    value: 2,
    name: "Number",
  }),
);

const strings = ["1", "1", "2", "3", "5"];
const numbers = [1, 1, 2, 3, 5];
// This generic simply takes in a different type and returns another type
const mapArray = <T, U>(arr: T[], fn: (val: T) => U) => arr.map(fn);

// Which "resolves" into:
// const mapArray = <string, number>(arr: string[], fn: (val: string) => number) => arr.map(fn)

console.log(mapArray<string, number>(strings, parseInt));
console.log(strings.map(parseInt));

type TUserReq<T> = {
  name: T;
  age: number;
};

const logUserReq = <T>(info: T): TUserReq<T> => {
  return { name: info, age: 1 };
};
const responseReq = logUserReq<string>("Ben");

type TCol<T extends number | string> = T;

const getNumberOfCols = <T>(no: T) => {
  return no;
};

console.log(getNumberOfCols<TCol<number>>(4));
