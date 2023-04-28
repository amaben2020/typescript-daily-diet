// you mainly use as to solve this issue
let human = {
  name: "Stefan",
  age: 39,
};

type HumanBeing = typeof human;

let anotherHuman: HumanBeing = {
  name: "Not Stefan",
  age: 20,
};

// extends: used to constrain the type of a generic parameter
function update<T extends keyof HumanBeing>(key: T) {
  human[key] = anotherHuman[key] as HumanBeing[T];
}

update("age");

//typeof
function f() {
  return { x: 10, y: 3 };
}
// type FunctionReturnType = ReturnType<typeof f>;

type Singular = {
  value: string;
  validate: (val: string) => boolean;
  kind: "singular";
};

type Multiple = {
  value: string[];
  validate: (val: string[]) => boolean;
  kind: "multiple";
};

type Props = Singular | Multiple;

function validate({ validate, value, kind }: Props) {
  // this is so that typescript knows the prop to use since there's no overlap between Singular | Multiple
  if (kind === "singular") {
    return validate(value);
  }
}

const validator = (s: string) => s === s;

const functionProps: Props = {
  validate: validator,
  value: "Ben",
  kind: "singular",
};

console.log("Function test", validate(functionProps));

type TField<T> = {
  value: T;
  validator: (x: T) => T;
};

type FormFields = {
  age: TField<number>;
  name: TField<string>;
};

function validate_field<T>(obj: TField<T>) {
  return obj.validator(obj.value);
}

const formFields: FormFields = {
  age: {
    value: 3,
    validator: (val: number) => val,
  },
  name: {
    value: "Benneth",
    validator: (val: string) => val,
  },
};

// We still have a little problem once we do an index access:
// function validateFields<K extends keyof FormFields>(key: K, forms: FormFields) {
//   let obj = forms[key];
//   // type assertion: as; We point TypeScript to a specific branch in our union type and narrow it down to a clear subset

//   validate_field(obj as TField<typeof obj.value>); // 💥	TS2345
// }
const validateFields = <K extends keyof FormFields>(
  key: K,
  forms: FormFields,
) => {
  const obj = forms[key];
  return validate_field(obj as TField<typeof obj.value>);
};

const extractData = (array: any, key: any) => {};
