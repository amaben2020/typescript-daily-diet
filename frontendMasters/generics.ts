const phone: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

phone.home;


console.log(phone);

interface IPhone {
  [key: string | number]: {
    country: string;
    area: string;
    number: string;
  }
}
type TPhone = {
  country: string
  area: string
  number: string
  babes: string[]
}

type TGuy = Record<string, string | number | TPhone>

const guy = {
  name: "Guy",
  age: 30,
  phone: {
    country: "+1",
    area: "211",
    number: "652-4515",
    babes: ['sandeep', 'sachin', 'saurav']
  },
} satisfies TGuy;


const personObject = {
  name: "Guy",
  age: 30,
  phone: {
    country: "+1",
    area: "211",
    friends: [{ name: "Nancy", contact: [{ email: "" }] }],
    babes: ['sandeep', 'sachin', 'saurav']
  },
}

type TArray = {
  name: string
  // index signature
  contact: {
    [key: string]: string
  }[]
}[]

const array = [{ name: "Nancy", contact: [{ email: "" }] }]satisfies TArray

