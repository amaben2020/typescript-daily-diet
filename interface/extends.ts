// Understanding an interface#
// An interface allows a new type to be created with a name and structure. The structure includes all the properties and methods that the type has without any implementation.

// structure
// interface TypeName {
//   propertyName: PropertyType;
//   methodName: (paramName: ParamType) => MethodReturnType;
// }

// TODO - create the ButtonProps type using an interface

interface IProduct {
  name: string;
  id: number;
  onclick: (a: number) => void;
}

interface IButtonProps {
  readonly text: string;
  onClick: (id: number) => void;
}

const addToCart = (product: IProduct) => {
  if (!product) return;
  console.log(product);
};

// Optional interface members#
// Interface members can be optional. Can you guess how you define an optional member?

// interface TypeName {
//   optionalProperty?: PropertyType;
//   optionalMethod?: (paramName: ParamType) => MethodReturnType;
// }

// ReadOnly
const BuyButton: IButtonProps = {
  text: "Buy",
  onClick: (a: number) => console.log(a),
};

// Cannot assign to 'text' because it is a read-only property.ts(2540)
// BuyButton.text = "$20";

interface Result {
  readonly name: string;
  readonly scores: number[];
}
let billScores: Result = {
  name: "Bill",
  scores: [90, 65, 80],
};
billScores.scores.push(70);

// Putting the readonly keyword before an array or object property name only ensures its reference won’t change. So, we can mutate the array but we can’t set the scores property to a different array.

interface ImmutableResult {
  readonly name: string;
  readonly scores: readonly number[];
}
let tomScores: ImmutableResult = {
  name: "Tom",
  scores: [50, 95, 80],
};
// tomScores.scores.push(70);

// Extending an interface# Interfaces can extend other interfaces so that they inherit all the properties and methods from the interface being extended. We do this using the extends keyword after the new interface name and before the interface name that is being extended:

// interface InterfaceA extends InterfaceB {
//   ...
// }

//Typescript basically explains the type of properties of a variable. It doesn’t say what type of object it is ,you have to initialize it.

interface ColoredButtonProps extends IButtonProps {
  color: string;
}

const GreenBuyButton: ColoredButtonProps = {
  color: "Green",
  text: "Buy",
  onClick: (a: number) => console.log(a),
};

const result = GreenBuyButton.onClick(3);

console.log(result);
