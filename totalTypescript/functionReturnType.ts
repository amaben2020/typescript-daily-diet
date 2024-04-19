// function return type annotations

const makeUser = (): {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
} => {
  return {
    id: 1,
    firstName: 'string',
    lastName: 'string',
    isAdmin: false,
  };
};

const makeUser2 = (): Record<string, number | string | boolean> => {
  return {
    id: 1,
    firstName: 'string',
    lastName: 'string',
    isAdmin: false,
  };
};

const makeUser3 = (): { [key: string]: string | number | boolean } => {
  return {
    id: 1,
    firstName: 'string',
    lastName: 'string',
    isAdmin: false,
  };
};

console.log(makeUser());

export default function add(x: number): any {
  return (num: number) => {
    if (num) {
      return add(x + num);
    }

    return x;
  };
}

// add(1)(2)(3)(4)(5) == 15;
console.log(add(1)); // 15
