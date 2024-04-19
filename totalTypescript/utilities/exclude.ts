// Works only with union, This type removes types from a union.

type Authors = "Alice" | "Bob" | "Jane";

type AuthorsWithoutJane = Exclude<Authors, "Jane">;

type TPermission = "admin" | "owner" | "user";
type TUi = {
  name: string;
  age: number;
  role: Exclude<TPermission, "user">;
};

const userI: TUi = {
  name: "",
  age: 1,
  role: "admin", // you could only be an "owner or admin"
};

type TNewDatum = Exclude<"admin" | "super-admin", "admin">;

const newData: TNewDatum = "super-admin";
