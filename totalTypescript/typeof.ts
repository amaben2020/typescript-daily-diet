// Typeof is used to refer to the type of a value
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// typeof allows you to extract the type from a variable. Unlike JavaScript’s typeof TypeScript’s typeof allows to use in a type to refer it as a type
enum ColorsEnum {
  white = "#ffffff",
  black = "#000000",
}

type Color = keyof typeof ColorsEnum; // 'white' | 'black'

let colorLiteral: Color;
colorLiteral = "white"; // OK
colorLiteral = "black"; // OK
// colorLiteral = "red"; // Error...

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

type TAccordionObject = keyof typeof accordionObject;

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

type TExpiryDate = typeof expiryDate;

// here, we are using the typeof a variable to infer another value
const values: typeof cardMonthAndYearValue = ["a", "b"];

enum UserDetail {
  good = "success",
  bad = "failed",
}
enum ENVIRONMENT {
  DEVELOPMENT = "development",
  TEST = "test",
  PRODUCTION = "production",
}

type GetUserDetail = keyof typeof UserDetail;

let isSuccess: GetUserDetail;

isSuccess = "bad";

console.log(process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT);

// function return typeof
const getHisOrHer = (val: number): "his" | "her" => {
  return "his" || "her";
};

type HisOrHer = ReturnType<typeof getHisOrHer>; // "his" | "her"

// OR

// type GetHisOrHerFunc = (val: number) => "his" | "her"

// const getHisOrHer: GetHisOrHerFunc = (val) => {
//   // ...
// }

// type HisOrHer = ReturnType<GetHisOrHerFunc> // "his" | "her"

const getUser = (user: { name: "Ben" }) => {
  return user;
};

type TUser = ReturnType<typeof getUser>;

const informate: TUser = { name: "Ben" };
