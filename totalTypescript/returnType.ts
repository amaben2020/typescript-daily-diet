// https://fjolt.com/article/typescript-returntype-utility-type

function sum(a: number, b: number): number {
  return a + b;
}

// 👇️ type SumReturnType = number
type SumReturnType = ReturnType<typeof sum>;

const adder1 = (a: number, b: number): SumReturnType => a + b;

type TAdder = ReturnType<typeof adder1>;

const value: TAdder = adder1(2, 4);

const sendData = (a: string, b: string) => {
  return { a, b };
};

const resultBook = sendData("A", "b");

type TData = ReturnType<typeof sendData>;

const stringifier = (data: TData) => {
  return JSON.stringify(data);
};
