// https://typehero.dev/challenge/generic-type-constraints

// This simply takes in type arg with the angle <> and returns a new type

// single generic args
interface Row<T extends number | string> {
  label: string;
  value: T;
  disabled: boolean;
}

type NumberRow = Row<number>;
type StringRow = Row<string>;

// multiple generic args
type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type AvocadoToast = GroceryItem<"Avocado Toast", 12.99, true>;
// what it literally entails
const aToast: AvocadoToast = {
  name: "Avocado Toast",
  price: 12.99,
  inStock: true,
};
// same as
// type AvocadoToast = {
//   name: 'Avocado Toast';
//   price: 12.99;
//   inStock: true;
// };

// constraint: when you see T or whatever variable, it means the variable must be of the type extended.
type RowConstraints = string | number | (() => string);

type RowData<T extends RowConstraints> = {
  value: T;
  label: string;
  orientation: "vertical" | "horizontal";
};

const rowData: RowData<number> = {
  value: 0,
  label: "",
  orientation: "vertical",
};

const render = <T extends string, U>(data: T[]): U[] =>
  data.map((elem) => parseInt(elem as T)) as U[];

console.log(render<string, number>(["12", "34"]));

// conditional generic
type TSex<T> = {
  m: T extends "male" ? T : never;
};
type TMale = "male";
const alphaMale: TSex<TMale> = { m: "male" };

interface Item {
  id: number;
  name: string;
}

type CheckType<T> = T extends Item ? Item : never;

const result2: CheckType<Item> = {
  id: 0,
  name: "Jess",
};

// ❌ Error: Type 'string' is not assignable to type 'never'.
const result3: CheckType<string> = "hello world";

type TAvocadoGeneric<T extends string, U, V> = {
  name: T;
  price: U;
  inStock: V;
};

const aToast2: TAvocadoGeneric<string, 12.99, boolean> = {
  name: "Avocado Toast",
  price: 12.99,
  inStock: true,
};

const getUserData = <T>(data: T) => {};
