import type { TUser } from '../eincode/utility/pick';
// I need to create a derived type from another type and keep both sync

type Device = {
  manufacturer: string;
  price: number;
};

type DeviceFormatter = {
  [Key in keyof Device as `format${Capitalize<Key>}`]: (
    value: Device[Key]
  ) => string;
};

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// MAPPED TYPE: https://dev.to/codeoz/how-i-improve-my-skills-in-typescript-2-mapped-type-dag
// type TUser = {
//   name: string;
//   age: number;
//   userName: string;
// };

// mapping over a type
type TUserInfo = {
  [Property in keyof TUser]?: TUser[Property];
} & {
  age: number;
  userName: string;
};
// We will create a type from User type, to begin let's create the EXACT SAME type.
const userResult = {
  name: 'Amaben',
  age: 31,
  userName: '',
} satisfies TUserInfo;
console.log(userResult.age);

type TPoints = {
  x: number;
  y: number;
};

type TReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const point: TReadonly<TPoints> = {
  x: 20,
  y: 30,
};
console.log(point.x);
