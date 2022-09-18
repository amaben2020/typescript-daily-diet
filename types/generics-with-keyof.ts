// Keyof Type#
// The Keyof type is used to specify the type of a property of an object.
// its 2 parameters are put in angle brackets
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Max", age: 10 },
  { name: "Charlie", age: 7 },
  { name: "Buddy", age: 6 },
];

console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));

// event map

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & {
    product: string;
    productId: number;
  };

  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

console.log("addToCart", {
  productId: 3,
  product: "bar",
  time: 123,
});
