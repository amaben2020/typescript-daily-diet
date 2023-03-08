function sum(a: number, b: number): number {
  return a + b;
}

// 👇️ type SumReturnType = number
type SumReturnType = ReturnType<typeof sum>;

const adder1 = (a: number, b: number) => a + b;

type TAdder = ReturnType<typeof adder1>;

const value: TAdder = adder1(2, 4);
