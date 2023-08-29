// Good resource: https://dev.to/nibble/higher-order-components-in-react-4c7h
// https://www.smashingmagazine.com/2020/06/higher-order-components-react/

//They basically :  Take one or more functions as arguments
// Returns a function

//Higher Order Components must be pure: You shouldn't perform side effects in HOC and it shouldn't mutate the component passed to it. It should instead return a new component which renders the component passed as argument. A HOC is supposed to compose a component for code reuse. If you are writing a HOC, avoid the temptation to mutate the component passed as argument. This is because once mutated, the input argument's new behavior will also be reflected outside the enhanced component which makes it non reusable. Instead of mutation, HOCs should use composition, by wrapping the input component in a container component. It is expected HOCs pass on props that are unrelated to its specific concern.

//higher order functions can help organize your code into smaller chunks, making it easier to maintain and extend.

type TPower = (c: number) => void;

const power = (power: number): TPower => {
  return (base: number) => {
    return base ** power;
  };
};

const squareOfNumber = power(2);
const cubed = power(3);
console.log(squareOfNumber(100)); // 10000
console.log(cubed(100)); // 1000000

//React: const EnhancedComponent = higherOrderComponent(WrappedComponent);
// const higherOrderComponent = (Component: any) => {
//   return (props) => { // { name: "" } | { }
//     return <Component {...props}/>
//   }
// }
// const userFromApi = { name: "" }
// <EnhancedComponent user={user} />
// The actual component needs not know about the loading state
//❌ loading ? ''  : --,  ✅instead <<EnhancedComponent user={user} loading={isLoading}/>

const calculateShapeArea = (value: number) => {
  return (numOfSides: number) => {
    return value * numOfSides;
  };
};

const squareSize = calculateShapeArea(1);
const isSquare = squareSize(4);
console.log("Square", isSquare);

const formatCurrency = function (
  currencySymbol: string,
  decimalSeparator: string,
) {
  return function (value: number): string {
    const wholePart = Math.trunc(value / 100);
    let fractionalPart: any = value % 100;
    if (fractionalPart < 10) {
      fractionalPart = "0" + fractionalPart;
    }
    return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
  };
};
const getLabel = formatCurrency("$", ".");
console.log("converted:", getLabel(400));

const localeUrl = "https://localhost:3000/en";

let hasLocale = false;

if (localeUrl.includes("en")) {
  hasLocale = true;
} else {
  hasLocale = false;
}

console.log(hasLocale);
