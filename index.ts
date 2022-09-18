import { data } from "./data";

const world = "world";

function hello(q: string): string {
  return `Hello ${q}! `;
}

// annotation
let orange: string = "orange";

interface IData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const filterBret = (value: Array<IData>): boolean => {
  if (Array.isArray(value)) {
    const name = value.map((resource) => resource.name === "Bret");

    if (name !== undefined) return true;
  }

  return false;
};

console.log(filterBret(data));

// optional parameter: always use the logical operator "||"

function add(a: number, b?: number): number {
  return a + (b || 0);
}

const optionalParam = (value: Array<IData>, afa?: string): any => {
  if (Array.isArray(value)) {
    return value.map((resource: IData) => {
      return {
        ...resource,
        username: resource.username === "Bret" ? afa || "" : resource.username,
      };
    });
  }
};

console.log(optionalParam(data, "Ben"));

// has no return value
function logMessage(message: string): void {
  console.log(message);
}
