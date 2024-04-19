// utility type in TypeScript that creates a new type, whilst removing all null or undefined elements

type TUserItems = {
  name: string;
  age: number;
}[];

type TNonNullableUserItems = NonNullable<TUserItems>;

const userItems: TNonNullableUserItems = [
  {
    name: "",
    age: 31,
  },
  {
    name: "jkkdsds",
    age: 12,
  },
];
