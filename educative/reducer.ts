//@ts-nocheck

const multiplyBy2 = (num: number) => num * 2;
const add3 = (num: number) => num + 3;
const divideBy4 = (num: number) => num / 4;


const runFunctionOutput = (input: any, fn:any) => {
  return fn(input)
}

const reduce = (array: any, howToCombine: any, buildingUp: any) => {
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
}

const output = reduce([multiplyBy2, add3, divideBy4], runFunctionOutput, 1);

console.log(output);