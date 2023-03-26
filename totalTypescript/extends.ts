// Inheriting Interface Properties

// extends creates a new type with the properties of the previous one
//TypeScript allows an interface to extend a class. In this case, the interface inherits the properties and methods of the class.

// medium : https://uzochukwubenamara.medium.com/using-the-extends-keyword-to-narrow-a-generic-type-ec8fe5df392d

// medium code formatter: cmd+option+6

// https://blog.logrocket.com/understanding-infer-typescript/

interface CartItem {
  name: string;
  person: string;
}

interface City extends CartItem {
  city: string;
}

const cartItem: City = {
  name: "",
  person: "",
  city: "",
};

// Use 'extends' keyword to narrow the value of a generic

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  },
};

export const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey],
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey,
): Obj[FirstKey][SecondKey] => {
  return {} as any;
};

const result = getDeepValue(obj, "bar", "d");

const nestedObj = <Obj, Info extends keyof Obj, TInfo extends keyof Obj[Info]>(
  obj: Obj,
  a: Info,
  b: TInfo,
): Obj[Info][TInfo] => {
  return obj[a][b] as Obj[Info][TInfo];
};
console.log("value", nestedObj(obj, "bar", "d"));

// keys are vital in objects which are extremely dynamic

interface ILocation {
  city: string;
  country: string;
}

interface IInterest {
  hobbies: [string, string];
  politics: [string, string];
}

interface IUser {
  name: string;
  phone: number;
  location: ILocation;
  interests: IInterest;
}

const user: IUser = {
  name: "Benneth",
  phone: 123456789,
  location: {
    city: "Abuja",
    country: "Nigeria",
  },
  interests: {
    hobbies: ["Cycling", "Reading"],
    politics: ["Ancient Civilization", "Roman empire"],
  },
};

// const getCountry = (user: IUser, key: "location", otherKey: "country"): IUser["location"]["country"] => {
//   return user[key][otherKey]
// }

// const getCountry = <UserType, LocationType extends keyof UserType, CountryType extends keyof UserType[LocationType]>(user: UserType, a: LocationType, b: CountryType): UserType[LocationType][CountryType] => {
//   return user[a][b]
// }

const getCountry = <
  UserType,
  LocationType extends keyof UserType,
  CountryType extends keyof UserType[LocationType],
>(
  user: UserType,
  a: LocationType,
  b: CountryType,
) => user[a][b];

console.log(getCountry(user, "location", "country"));

const userInfo = {
  name: "Benny",
  phone: 123456789,
  location: {
    city: "Abuja",
    country: "Nigeria",
  },
  interests: {
    hobbies: ["Cycling", "Reading"],
    politics: ["Ancient Civilization", "Roman empire"],
  },
};
type TLocation = {
  city: string;
  country: string;
};

type TInterests = {
  hobbies: string[];
  politics: string[];
};
type TUser = {
  name: string;
  phone: string;
  location: TLocation;
  interests: TInterests;
};

const recreateGetCountry = <
  TUser,
  K extends keyof TUser,
  U extends keyof TUser[K],
>(
  object: TUser,
  key: K,
  value: U,
) => {
  return object[key][value];
};

console.log(recreateGetCountry(userInfo, "location", "country"));

console.log(userInfo["location"]["country"]);

// compose User, Base

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post extends User {
  title: string;
  body: string;
}

interface Comment extends Post {
  comment: string;
}

interface Base {
  id: string;
}

interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  title: string;
  body: string;
}

interface Comment extends Base {
  comment: string;
}

// interface Comment extends Base, User {
//   comment: string;
// } extending 2 interfaces at the same time.

type TuserAndPost = {
  id: string;
  firstName: string;
  lastName: string;
  posts: Post[];
};
