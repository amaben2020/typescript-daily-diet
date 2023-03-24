// index signatures: used to represent the type of object/dictionary when the values of the object are of consistent types.
//https://dmitripavlutin.com/typescript-index-signatures/

// Syntax: { [key: KeyType] : ValueType }
let colorsTheme = {
  palette: {
    success: {
      main: "green",
    },
    error: {
      main: "red",
    },
    warning: {
      main: "orange",
    },
  },
};
let ColorsTheme: {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
};

ColorsTheme = {
  palette: {
    success: {
      main: "green",
    },
    error: {
      main: "red",
    },
    warning: {
      main: "1231313",
    },
  },
};

const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000,
};

const salary2 = {
  contractSalary: 110_000,
};

// You want to implement a function that returns the total remuneration based on the salary object:
// The idea of the index signatures is to type objects of unknown structure when you only know the key and value types.

function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    console.log(name);
    total += salaryObject[name];
  }
  return total;
}

totalSalary(salary1); // => 120_000
totalSalary(salary2); // => 110_000

const createCache = () => {
  const cache: { [key: string]: string } = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

//ex: 4
interface StringByString {
  [key: string]: string;
}

const heroesInBooks: StringByString = {
  Gunslinger: "The Dark Tower",
  "Jack Torrance": "The Shining",
};

// //ex: 5
interface Options {
  [key: string]: string | number | boolean;
  timeout: number;
}

const options: Options = {
  timeout: 1000,
  timeoutMessage: "The request timed out!",
  isFileUpload: false,
};

//Record: This behavior suggests that the index signature is meant to be generic in regards to keys, records must be SPECIFIC about the keys which are strings.
type SpecificSalary = Record<"yearlySalary" | "yearlyBonus", number>;

const salary4: SpecificSalary = {
  yearlySalary: 120_000,
  yearlyBonus: 10_000,
};

interface IProgrammer {
  [key: string]: string | number | boolean;
}

const programmer: IProgrammer = {
  name: "Programmer",
  age: 30,
  sex: "male",
  advanced: true,
};

// Yes, you want to use specific keys, then keyof is useful.

type INation = {
  [key: string]: string | number;
};

const nation: INation = {
  name: "Nigeria",
  population: 1000000,
};
