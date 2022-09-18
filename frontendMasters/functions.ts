// always type your return, explicit return types
//Type driven development
const addNos = (a: number, b: number): number => {
  return a + b;
};

console.log(addNos(addNos(3, 4), 10));


//callable types: interfaces or type aliases that describe something that can be invoked

interface TwoNumberAdd {
  (a: number, b: number): number;
}

type TwoNumberAddType = (a: number, b: number) =>  number;

// you dont need to state the info again i.e callbacks
const adder: TwoNumberAddType = (a, b) => a + b;

// functions sometimes dont' return anything : VOID
const sayHello = (): void => {
  console.log("Hello");
}
// the return type should be ignored and left unused
 

//Function overloads
