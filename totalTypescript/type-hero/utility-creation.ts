type TPoints = {
  x: number;
  y: number;
};

type CustomReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadOnlyPoint = CustomReadOnly<TPoints>;
const points: ReadOnlyPoint = {
  x: 21212,
  y: 33232,
};
