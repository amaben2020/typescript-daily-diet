//Callbacks : They are a great example of when a function type is necessary. A callback is essentially a function that you pass as an argument to another function. It is invoked when something specific happens, like a backend call returns or when some event occurs. It might be invoked with some arguments with data from the backend or an event object.

// Generics : Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure.
import products from './product.json'
function fetchTitles(
  count: number,
  onSuccess: (titles: string[]) => void
) { /* ... */ }


//Higher order functions: They are functions that take other functions as arguments or return other functions.

// closure
const convertToLang = (language: string) => {
  const converted = language === 'pl' ? 'cześć' : 'hello';

  // not yet invoked
  return (name: string) => `${converted} ${name}`
}

const renderName = convertToLang('pl')
console.log(renderName('Benneth'))

const hoff = (num: number) => {

  const random = Math.random() * num
  console.log(random)
  return (name: string) => random > 0.3 ? `Yeah ${name}` : `Nope ${name}`
}
const getNameH = hoff(1)

console.log(getNameH('Benneth'));


//Typing functions
type IPer = {
  name: string
}[]

interface IPerr {
  name: string;
  age: number;
}

function getNames(persons: IPer): string[] {
  const results = [];
  for (let person of persons) {
    results.push(person.name);
  }
  return results;
}

// Generic functions#
// Making a function generic is (in this case) a way of saying “this function works with any kind of array” and while maintaining type safety at the same time.

// We replaced any with TElement and TResult type parameters. Type parameters are named any. Typing items as TElement[] still means that it is an array of anything. However, because it’s named, it lets us establish relationships between types of function parameters and the return type.

interface IArray {
  name?: string;
  age?: string;
  netWorth: number;
}

const personsWithCash: IArray[] = [
  { name: 'John', age: '30', netWorth: 3444443 },
  { name: 'Alice', age: '25', netWorth: 443 },
  { name: 'Xoli Mfenks', age: '44', netWorth: 2003444443 },
  { name: 'Anenih Tony', age: '90', netWorth: 40000000000000 },
]
const mappingFunction = (elem: IArray): boolean => {
  return elem.netWorth > 1000000
}

const values = [1, 2, 3, 4, null, 5, 6, 7, undefined];

console.log(values.length);
// Output: 9

console.log(values.filter(Boolean).length);
// Output: 7

// array.filter((item) => {
//   return !!item; // evaluate whether item is truthy
// });

// note that this does not mutate the value original array
console.log(values.length);
// Output: 9

const filterNamesOfCandidatesWithMillions = <T, TResult>(array: T[], instruction: (elem: T) => TResult): T[] => {
  return array.filter(instruction)
}

console.log('result', filterNamesOfCandidatesWithMillions<IArray, boolean>(personsWithCash, mappingFunction));

const newArr = [{ netWorth: 1000000 }, { netWorth: 2000000 }, { netWorth: 3000000 }];

console.log('result2', filterNamesOfCandidatesWithMillions(newArr, mappingFunction));

//create a generic function
// const getNamesOfExtremelyWealthyGuys = <TPeople, TPerson>(people: TPeople[], mapper: (string: TPeople) => TPerson): TPerson[] => {
//   return people.map(mapper);
// }

// console.log(getNamesOfExtremelyWealthyGuys<IArray, string>(personsWithCash, mappingFunction))

const mapperr = <T>(array: T[]): T[] => {

  return array.map(elem => elem)
}

type INa = {
  name: string;
}[]

// console.log(mapperr<IArray>(personsWithCash))

// generic function : This is useless because you cannot add a number to a string except via narrowing
function getMeAge<K>(age: K): K {
  return age
}

console.log(getMeAge<string>('30'))

// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
//   return obj[key];
// }

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "b"));

interface Hunter<T> {
  name: string,
  games: T[]
}

const hunter: Hunter<'COD'> = {
  name: 'Benneth',
  games: ['COD']
}

let hash = {}


// 1. write a reducer function that returns a new object
// 2 . This reducer func would accept an empty object


const reduceValue = (array: IArray[]) => {
  const immutable = [...array]

  return immutable.reduce((acc, curr) => {

    //@ts-ignore
    return { ...acc, [curr.age]: curr.name }
  }
    , {})
}

console.log('reddd', (reduceValue(personsWithCash)))


interface FormField<T> {
  value?: T;
  defaultValue: T;
  isValid: boolean;
}

// Very specialized. Only works with `FormField<string>`.
function getStringFieldValue(field: FormField<string>): string {
  if (!field.isValid || field.value === undefined) {
    // Thanks to the specialization, the compiler knows the exact type of `field.defaultValue`.
    return field.defaultValue.toLowerCase();
  }
  return field.value;
}

// Generic. Can be called with any `FormField`.
function getFieldValue<T>(field: FormField<T>): T {
  if (!field.isValid || field.value === undefined) {
    // On the other hand, we don't know anything about the type of `field.defaultValue`.
    return field.defaultValue;
  }
  return field.value;
}

console.log(getFieldValue({
  value: 3,
  defaultValue: 2,
  isValid: true
}));

interface Human {
  name: string;
  age: number;
}

type PersonKeys = keyof Human; // ‘name’ | ‘age’

function get<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

// declare const human: Human;
// get(human, 'name'); // ✅ No errors
// get(human, 'foo'); // 🔴 Error!


function pick<T, K extends keyof T>(array: T[], key: K): T[K][] {
  const results = [];
  for (let element of array) {

    results.push(element[key]);
  }
  return results;
}

console.log('NAME', pick<IArray, 'age'>(personsWithCash, 'age'));


interface IPPeople<T> {
  name: T;
}

const getName = <T>(person: IPPeople<T>
): T => {
  return person.name
}

console.log(getName<string>({
  name: 'benneth'
}))

type X1 = NonNullable<string | undefined>; // X1 = string

type X2 = Partial<{ name: string; age: number; }>; // X2 = { name?: string; age?: number;}

function square(x: number): number { return x * x; }
type X3 = ReturnType<typeof square>; // X3 = number

// Generics simply take a type as arguments, where you see the type, you're just simply seeing the generic.

interface IDemon<T> {
  name: T | string;
  age: T;
  scream: (value: T) => T;
}

const screamer = <T, K>(demon: IDemon<T>): T | K => {
  return demon.scream(demon.age)
}

console.log(screamer<number | string, number | string>({
  name: 'benneth',
  age: 30,
  scream: (value: number | string) => {
    if (typeof value === 'number') {
      return Math.ceil(value)
    }
    return value.toUpperCase()
  }
}))


// advanced generics
const myUser = {
  name: 'benneth',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    friends: ['benneth', 'joe']
  }
}

const layoutWrapper = {
  component: 'AuthComponent',
  props: {
    user: myUser,
    callback: () => {
      console.log('callback')
    }
  }
}


// Generics are about making reusable functions
type myUserProps = { name: string; age: number; address: { street: string; city: string; state: string; friends: string[] } }

type LayoutWrapperProps = { component: string; props: { user: myUserProps; callback: () => void } }

const merged = { ...myUser, ...layoutWrapper }
const logger = <T, U>(firstObject: T, secondObject: U) => {
  console.log({ ...firstObject, ...secondObject })
}

console.log(logger<myUserProps, LayoutWrapperProps>(myUser, layoutWrapper))



const myPoliticians = [
  {
    name: 'Benneth',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      friends: ['benneth', 'joe']
    }
  },
  {
    name: 'Druggie',
    age: 90,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      friends: ['benneth', 'joe']
    }
  },
]

const extractFriends = (elem: any) => {
  return elem.age > 80
}

const getFriend = <T>(array: T[], instruction: (elem: T) => boolean) => {
  return array.find(instruction)
}

console.log(getFriend(myPoliticians, extractFriends))


interface IInfo {
  name: string, price: number
}

const info = [
  { name: "P1", price: 32322 },
  { name: "P2", price: 32322 },
  { name: "P3", price: 32322 },
  { name: "P4", price: 32322 },
]

const handleInfo = (data: IInfo[]) => {
  return data.filter(object => object.name === 'P1')

}
console.log(handleInfo(info))