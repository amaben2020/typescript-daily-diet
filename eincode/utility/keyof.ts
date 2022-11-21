//Keytype extends a key of the data type array

function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
  return items.map((item) => item[key])
}

const animals = [
  { name: 'Mimi', age: 28 },
  { name: 'LG', age: 8 },
]

console.log(pluck(animals, "age"))
console.log(pluck(animals, "name"))


interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart1: BaseEvent & { quantity: number, productId: string },
  checkout: BaseEvent
}


interface MovieChar {
  firstName: string;
  name: string;
  lastName: string
}

const movieChar = {
  firstName: "", name: "", lastName: ""
}
type characterProps = keyof MovieChar

console.log(first)