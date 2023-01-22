//Optional Param (?): This makes arguements optional
// The required arg must come first (first?: string, second: string) 
const getNam = (first: string, last?: string) => {
  if (last || first) {
    return `${first} ${last}`;
  }
  return first;
};
❌
console.log(getNam("Ben"))