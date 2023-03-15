// Note that the infer keyword is always used within the extends clause of conditional types. So, make sure to understand the Conditional Types of the previous sections before diving into the infer keyword.

//Type inference refers to the automatic detection of the type of an expression in a formal language.

// 3rd party lib
function describePerson(person: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
}) {
  return `${person.name} is ${
    person.age
  } years old and love ${person.hobbies.join(" and  ")}.`;
}

const strValues = ["me", "you", "them"];
console.log(strValues.join(" and "));

console.log(strValues.findIndex((elem) => elem === "you") > -1);

const allMethods = ["POST", "PUT", "DELETE"];
const reqMethod = "POST";

console.log(allMethods.includes(reqMethod));

const prefillFunction = (
  func: (a: number, b: number) => number,
  prefilledValue: number,
) => {
  const deciderFunc = () => {
    return func(prefilledValue, prefilledValue);
  };

  return deciderFunc;
};

const multiplier = prefillFunction((a: number, b: number) => a * b, 3);

const decider = multiplier();
console.log(decider);

const STRING =
  "https://pagespeed.web.dev/report?url=https%3A%2F%2Fdeploy-preview-107--alpro-foundation-website.netlify.app%2F";

const replaceStringWithAlproProduction = () => {
  const url = new URL(STRING);
  const origin = url.origin;
  const alpro = url.searchParams
    .get("url")
    ?.split("--")[1]
    .replace("/", "")
    ?.replace("-", "")
    .split("-")[0];

  return `${origin}/analysis/${alpro}`;
};

console.log(replaceStringWithAlproProduction());

const bitcoinData = [
  {
    date: "2013-05-01",
    "txVolume(USD)": 108659660.293,
    txCount: 52443,
    "marketcap(USD)": 1542820000,
    "price(USD)": 139,
    "exchangeVolume(USD)": 0,
    generatedCoins: 3575,
    fees: 36.80599998,
    activeAddresses: null,
  },
  {
    date: "2013-05-02",
    "txVolume(USD)": 96958519.0041,
    txCount: 55169,
    "marketcap(USD)": 1292190000,
    "price(USD)": 116.38,
    "exchangeVolume(USD)": 0,
    generatedCoins: 3425,
    fees: 54.40791613,
    activeAddresses: null,
  },
];
