// Generic simply takes in types as Parameters and return it. They are basically like functions.You are not required to pass any argument to the generic type.

type ApiRequest<T extends string | number, U = "GET"> = {
  data: T;
  method: U;
};

type TSConfig<T = { strict: true }> = T;

const config: TSConfig = {
  strict: true,
};

type TUnique<T = "Amaben"> = T;

const personal: TUnique = "Amaben";
