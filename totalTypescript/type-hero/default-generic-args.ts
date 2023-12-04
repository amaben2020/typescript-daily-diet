type ApiRequest<T extends string | number, U = "GET"> = {
  data: T;
  method: U;
};

type TSConfig<T = { strict: true }> = T;

const config: TSConfig = {
  strict: true,
};
