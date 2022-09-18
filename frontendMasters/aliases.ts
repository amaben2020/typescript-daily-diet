import { data } from "./../data";

//This would be my way of coding henceforth
const info = data

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const selectOnlyNames = <D, K extends keyof D>(people: D[], key: K): D[K][] => { 
  const p = [...people]
  return p.map(elem => (
    elem[key]
  ))
}

console.log(selectOnlyNames(info, "name"));
console.log(pluck(info, "name"));


const colors = ["red", "blue", "green"];

const selectColors = <Col, Key extends keyof Col>(arrayOfColors: Col[], id : number | string)  => {
  const immutable = [...arrayOfColors]

  if (typeof id === "string") {
    return immutable[Number(id)]
  }
  return immutable[id]
}
 
console.log(selectColors(colors, '2'))

const convertToDate = (value: string) => { 

  const dateObj = new Date(value)
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) 
}

console.log('DATE', convertToDate("December 17, 1995 03:24:00"))

console.log('date')


 