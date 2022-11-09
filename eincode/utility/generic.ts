function pickObjectKeys2<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

const languageInfo = {
  name: "TypeScript",
  age: 8,
  extensions: ['ts', 'tsx']
}

const ageAndExtensions = pickObjectKeys2(languageInfo, ['age', 'extensions'])


let doubler = {
  factor: 2,
  double(x: number) {
    return x * this.factor;
  }
}
let score = [5, 6, 7];
let newScores = Array.from(score, doubler.double, doubler);
console.log(newScores);

// console.log(Array.from({ length: 20 }, (_, i) => console.log(i + 1)))


// Basic example
const generalizedFunction = <T>(array: T[]): T => {
  return array[array.length - 1]
}
console.log('str', generalizedFunction<string>(['a', 'b']))
console.log('num', generalizedFunction([1, 2]))


// Generics should return a type specified

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([0, 100, 0], [10, 20, 30]));

// A function that has angle brackets in front that could receive any type
function simpleStringState<T>(
  initial: T
): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState<string>("hello");
const [str2getter, str2setter] = simpleStringState("jack");
console.log(str2getter());
console.log(str1getter());
str1setter("goodbye");
console.log(str1getter());
console.log(str2getter());
