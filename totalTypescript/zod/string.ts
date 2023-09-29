import { z } from "zod";
const dataInputFromUser = z.string().min(8).max(16);
dataInputFromUser.parse("A long text");

const longString = (input: string) => {
  const response = dataInputFromUser.parse(input);
  return response;
};

console.log(longString("lorem ipsum"));

