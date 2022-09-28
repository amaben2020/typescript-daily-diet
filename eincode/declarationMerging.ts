//only done on interfaces
interface IPerson {
  kind: "business" | "academic",
  name: string
  age: number
}

interface Person {
  prop1: string

  prop2: number
}

const logger = () => {
  const person: IPerson = {

  }
}