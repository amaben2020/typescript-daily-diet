// Foo | Bar is a type that has either all required properties of Foo OR all required properties of Bar. Inside the sayHello function, it’s only possible to access obj.xyz because it’s the only property that is included in both types.

interface Foo {
  foo: string;
  xyz: string;
}

interface Bar {
  bar: string;
  xyz: string;
}

const sayHi = (obj: Foo | Bar) => {
  /* ... */
};

sayHi({ foo: "foo", xyz: "xyz" });
sayHi({ bar: "bar", xyz: "xyz" });

// interface simply describes the properties of an object

interface Foo {
  foo: string;
  xyz: string;
}

interface Bar {
  bar: string;
  xyz: string;
}

const sayHello2 = <T, K extends keyof T>(obj: T, input: K): T[K] => {
  return obj[input];
};

console.log(sayHello2<Foo, "foo">({ foo: "foo", xyz: "xyz" }, "foo"));

const UserAccount1 = {
  name: "Ben",
  state: "Anambra",
  balance: 35800,
  status: "active",
  kind: 1,
};
const UserAccount2 = {
  name: "Blessing",
  state: "Benue",
  balance: 5100,
  status: "inactive",
  kind: "yeah",
};

enum Kind {
  first,
  second,
}

interface Users {
  name: string;
  state: string;
  balance: number;
  status: "active" | "inactive";
  kind: string | number;
}

const getCandidateInfo = <T, K extends keyof T>(user: T, key: K): T[K] => {
  return user[key];
};

console.log(getCandidateInfo(UserAccount1, "status"));

//Discriminated Unions
interface EmailInformation {
  kind: "email";
  email: string;
}

interface Phoneinformation {
  kind: "phone";
  phone: number;
}

type Information = EmailInformation | Phoneinformation;

interface Customer {
  name: string;
  information: Information;
}

// shorter version
type Contact4 =
  | { kind: "email"; email: string }
  | { kind: "phone"; phone: number };

function printCustomerinformation({ information }: Customer) {
  if (information.kind === "email") {
    // Type of `information` is `Emailinformation`!
    console.log(information.email);
  } else {
    // Type of `information` is `Phoneinformation`!
    console.log(information.phone);
  }
}

console.log(
  printCustomerinformation({
    name: "John",
    information: {
      kind: "phone",
      phone: 2020202020,
    },
  }),
);

type IEmail = {
  kind: "email";
  email: string;
};
type IPhoneNos = {
  kind: "phone";
  phone: number;
};

type ICustomer = {
  name: string;
  information: IEmail | IPhoneNos;
};

//gather info in react
const customer: ICustomer = {
  name: "Algomachine",
  information: {
    kind: "email",
    email: "algomachijne.com",
  },
};

const generateInfoForCustomer = (cus: ICustomer) => {
  return cus.information.kind === "phone"
    ? {
        name: cus.name,
        phone: cus.information.phone,
        kind: "phone",
      }
    : {
        name: cus.name,
        email: cus.information.email,
        sex: "male",
      };
};

console.log(generateInfoForCustomer(customer));

// for (let key in generateInfoForCustomer(customer)) {
//   if (Object.prototype.hasOwnProperty.call(generateInfoForCustomer(customer), key)) {
//     //@ts-ignore
//        key + ': ' + generateInfoForCustomer(customer)[key]
//   }
// }

type IteratorResultt<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}

interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}

const enum ContactType {
  Phone,
  Email,
}

type ContactEnum =
  | { type: ContactType.Email; email: string }
  | { type: ContactType.Phone; phone: number };

//Multiple Discriminated properties
type Fooo =
  | { kind: "A"; type: "X"; abc: string }
  | { kind: "A"; type: "Y"; xyz: string }
  | { kind: "B"; type: "X"; rty: string };

// declare const foo: Fooo;

const foo: Fooo = { kind: "A", type: "X", abc: "string" };

if (foo.kind === "A" && foo.type === "X") {
  if (!foo.kind) console.log("nah");
  console.log(foo.abc);
}

//advanced: Users place orders for products. Users have contact information, email or postal addresses, and at least one is required. Orders should include price, product name, quantity, payment date, paid amount, sending date, and delivery date.

type Customerrr = {
  name: string;
  contactInfo: ContactInfo;
};

type ContactInfo =
  | { kind: "emailOnly"; email: string }
  | { kind: "postalOnly"; address: string }
  | { kind: "emailAndPostal"; email: string; address: string };

type PaidOrderData = { paymentDate: Date; amount: number };
type SentOrderData = { sendingDate: Date };
type DeliveredOrderData = { deliveryDate: Date };

type OrderState =
  | { kind: "new" }
  | { kind: "paid"; paidData: PaidOrderData }
  | { kind: "sent"; paidData: PaidOrderData; sentData: SentOrderData }
  | {
      kind: "delivered";
      data: PaidOrderData;
      sentData: SentOrderData;
      deliveredData: DeliveredOrderData;
    };

type Order = {
  customer: Customerrr;
  state: OrderState;
  productName: string;
  price: number;
  quantity: number;
};
