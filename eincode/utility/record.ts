interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

type Indexed<K extends string, V> = {
  [key in K]: V;
};
// Record<Type,value>
type Config<T extends string | number | symbol> = Record<T, number>
type Colors = Config<'Red' | 'Green' | 'Blue'>;

const colors: Colors = {
  Red: 5,
  Green: 5,
  Blue: 5,
};




type User = {
  name: string
  age: number
}
//Record<keys, value>
type UserRecord = Record<"miffy" | "ben", User>

const userInfo: UserRecord = {
  "miffy": { name: "Miffy", age: 40 },
  "ben": { name: "Miffy", age: 40 },
}




