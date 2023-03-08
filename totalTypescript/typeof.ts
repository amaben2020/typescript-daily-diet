// Typeof is used to refer to the type of a value
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

enum ColorsEnum {
  white = "#ffffff",
  black = "#000000",
}

type Color = keyof typeof ColorsEnum; // 'white' | 'black'

let colorLiteral: Color;
colorLiteral = "white"; // OK
colorLiteral = "black"; // OK
// colorLiteral = "red"; // Error...

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string

const accordionObject = {
  id: "76e59c1138d14317845c8799d3374b19",
  title: "FAQ Category 1",
  slug: "faq-category-1",
  questions: [
    {
      id: "d3857ebd29ac4c6081fb5e481fe2147e",
      question: "FAQ Question 2",
      answer: "<h1>Title</h1> ",
    },
    {
      id: "10f96636f4864fc0aa20570cd0b6b115",
      question: "FAQ Question 1",
      answer: "<h1>Title</h1>",
    },
  ],
};

const regex = new RegExp(/^(0[1-9]|1[0-2])\/?.([0-9]{4}|[0-9]{2})$/);

class Regex {
  param: any;
  constructor(param: any) {
    this.param = param;
  }

  getValue(input: string) {
    if (this.param && regex.test(input)) return true;

    return "Error occured";
  }
}

const res = new Regex(/^(0[1-9]|1[0-2])\/?.([0-9]{4}|[0-9]{2})$/).getValue(
  "03/33",
);

console.log(res);

const cardMonthAndYearValue = "10/22".split("/");

const expiryDate = new Date(
  Number(`20${cardMonthAndYearValue[1]}`),
  Number(cardMonthAndYearValue[0]),
  0,
);

console.log(expiryDate);
