function removeFirstEntryFromArray<T>(arr: T[]): T[] {
  return arr.splice(1);
}

const strArray: string[] = ["Santa", "Claus", "is", "coming", "to", "town"];

const newStrArray = removeFirstEntryFromArray(strArray);

let str = "";

newStrArray.forEach((elem) => (str += elem.toUpperCase()));

console.log(str);
