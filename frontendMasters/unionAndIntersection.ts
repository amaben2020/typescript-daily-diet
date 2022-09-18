//Union --> OR
// Intersection --> AND

//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

//Union types: parameter could be any of the following. If a function based on its args 2 types of return, you should use union.
const flipCoin = (): "head" | "tail" => {
  if (Math.random() > 0.5) {
    return "head";
  }
  return "tail";
};

console.log(flipCoin());

const isHeadOrTail = flipCoin();

if (isHeadOrTail === "head") {
  console.log("I got heads");
} else {
  console.log("I got tails");
}

// narrowing
function repeatter(nos: number | string, str: string): string {
  if (typeof nos === "number") {
    return " ".repeat(nos) + str;
  }
  return nos + str;
}

console.log(repeatter(5, "hello"));

//Union types

function useUnion(a: string, b?: number): string | number {
  // branching or control flow
  if (typeof a === "string" || !b) {
    return a;
  } else {
    return 30;
  }
}

console.log(useUnion("20"));


 