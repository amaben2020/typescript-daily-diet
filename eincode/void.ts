type Noop = () => any;
type Noop2 = () => void;

function printInfo(x: Noop): void {
  const result = x()
}

function printInfo2(y: Noop2): void {
  const result = y()
  result()
}