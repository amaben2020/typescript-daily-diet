// constraints basically restrict the type parameter(s) accepted by a generic type.

type AllowString<T extends string> = T;

type AllowNumber<U extends number> = U;

type CreateLogger<T extends (a: number) => void> = {
  log: T;
  exit: () => void;
};

// usage:
const userName: AllowString<string> = "Benneth";
const userAge: AllowNumber<number> = 31;
type TLogger = (z: number) => void;
const authHelper: CreateLogger<TLogger> = {
  log: (a) => a,
  exit: () => {
    console.log("Ok");
  },
};
