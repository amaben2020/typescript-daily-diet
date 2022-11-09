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

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log([name, data])
}

console.log(sendEvent("addToCart1", { productId: "1", quantity: 1, time: 0, user: "Mimi" }))

console.log(sendEvent("checkout", { time: 0, user: "Mimi" }))