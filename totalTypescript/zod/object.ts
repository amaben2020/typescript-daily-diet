import { z } from "zod";
import { fromZodError } from "zod-validation-error";
const FormData = z.object({
  firstName: z.string().min(1).max(18),
  lastName: z.string().min(1).max(18),
  phone: z.string().min(10).max(14).optional(),
  email: z.string().email(),
  url: z.string().url().optional(),
});

const validateFormData = (inputs: unknown) => {
  const isValidData = FormData.parse(inputs);
  return isValidData;
};

console.log(
  validateFormData({
    firstName: "Benneth",
    lastName: "Uzor",
    phone: "0703699009454",
    email: "algo@se.cc",
    url: "https://sassa.ssa",
  }),
);

const UserSchema = z.object({
  username: z.string().min(3).max(5),
  age: z.number().gt(20).default(21),
  birthday: z.date(),
  isProgrammer: z.boolean().optional(),
  sex: z.string().nullish(), //allows you use undefined or null
  custom: z.string().min(3, "Hey, so small"), // custom error npm i zod-validation-error
});

const user = {
  username: "WDS",
  birthday: new Date(),
  // age: 22,
  isProgrammer: true,
  sex: null,
};
// hey, does this match the schema?
console.log(UserSchema.parse(user));
const res = UserSchema.safeParse(user); // returns an object

if (!res.success) {
  console.log(fromZodError(res.error));
}

// ts integration

// type TZUser = z.infer<typeof UserSchema>;
