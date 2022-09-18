// Types errors are raised because variables of type unknown can’t be added together.

const add = (a: unknown, b: unknown) => {
  // return a + b;
};

// overriding unknown
function add2(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}

//Best used when data fetching

async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);

  return response.json();
}

type Person = {
  id: string;
  name: string;
};

// This is a type predicate; it is a special return type that the Typescript compiler uses to know what type a particular value is.

function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

async function getPerson(id: string): Promise<Person | null> {
  const person = await getData("/people/1");
  if (person && isPerson(person)) {
    return person;
  }
  return null;
}

// fetch util
const getUser = async (url: string, id: number): Promise<unknown> => {
  const data = await fetch(`/${url}/${id}`);

  return data.json();
};

async function getSingleUser(): Promise<Person | null> {
  const singleUser = await getUser("users", 1);

  if (singleUser) {
    //@ts-ignore
    return singleUser;
  }

  return null;
}

const calcTotal = () => {
  return 0 + 0;
};

let total = calcTotal() as number;
