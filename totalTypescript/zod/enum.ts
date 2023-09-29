import { z } from "zod";

enum Hobbies {
  Male = "Male",
  Female = "Female",
}
// making an array read only for zod
const hobbies = ["Programming", "Guitar"] as const;
const UserSchema = z.object({
  hobby: z.enum(hobbies),
  sex: z.nativeEnum(Hobbies),
  friends: z.array(z.string()),
});

const user = {
  hobby: "Programming",
  sex: "Male",
  friends: ["Ben", "Blessing"],
};

// hey, does this match the schema?
const result = UserSchema.parse(user);
const result2 = UserSchema.shape.hobby;
const partial = UserSchema.partial();
const deepPartial = UserSchema.deepPartial();
const pick = UserSchema.pick({ hobby: true });
const nonNullable = UserSchema.strict();
const elements = UserSchema.shape.friends.element;

console.log("Result", result);
// console.log("Result2", result2);

console.log("elements", elements);

enum PrivacyLevel {
  private = "private",
  public = "public",
}

const Form = z.object({
  repoName: z.string(),
  privacyLevel: z.nativeEnum(PrivacyLevel),
  //              ^ 🕵️‍♂️
});

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values);

  return parsedData;
};
