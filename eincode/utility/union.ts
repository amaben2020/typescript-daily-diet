// https://www.totaltypescript.com/tips/derive-a-union-type-from-an-object
export const fruitCount = {
  apple: 1,
  pear: 4,
  banana: 26,
}

type SingleFruitCount =
  | {
    apple: number
  }
  | {
    banana: number
  }
  | {
    pear: number
  }

// const singleFruitCount: SingleFruitCount = {
//   banana: 12,
// }

type FruitCounts = typeof fruitCount
// What this is doing is its taking each key in FruitCounts and setting its type to an empty object. So when I use it, TypeScript will be expecting a shape like this.

// type NewSingleFruitCount = {
//   [K in keyof FruitCounts]: {}
// }
// const singleFruitCount: NewSingleFruitCount = {
//   apple: {},
//   pear: {},
//   banana: {},
// }

type NewSingleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number
  }
}[keyof FruitCounts]

// usage
const singleFruitCount: NewSingleFruitCount = {
  apple: 2,
}

// keyof, in

