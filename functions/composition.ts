type TF1 = (a: number) => boolean;
type TF2 = (a: TUserInDB) => number;
type TUserInDB = {
  name: string;
  age: number;
};

const getAge = (user: TUserInDB): number => user.age;
const isAllowedAge = (age: number) => age > 20;

const userInDb: TUserInDB = { name: "Adam", age: 25 };

const composed = (f: TF1, g: TF2) => (x: TUserInDB) => f(g(x));

const isAllowedToDrink = composed(isAllowedAge, getAge)(userInDb);

console.log(isAllowedToDrink);
