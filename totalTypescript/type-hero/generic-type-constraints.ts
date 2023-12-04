type AllowString<T extends string> = T;

type AllowNumber<U extends number> = U;

type CreateLogger<T extends (a: number) => void> = {
  log: T;
  exit: () => void;
};

// usage:
const userName: AllowString<string> = "Benneth";
const userAge: AllowNumber<number> = 31;
const authHelper: CreateLogger<(z: number) => void> = {
  log: (a) => a,
  exit: () => {
    console.log("Ok");
  },
};
