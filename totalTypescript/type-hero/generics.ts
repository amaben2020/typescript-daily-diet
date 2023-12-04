// https://typehero.dev/challenge/generic-type-constraints

// This simply takes in type arg with the angle <> and returns a new type

// single generic args
interface Row<T> {
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
