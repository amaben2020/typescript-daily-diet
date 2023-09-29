import { z } from "zod";

const Form = z.object({
  name: z.string(),
  // here make the phone number optional
  phoneNumber: z.string().optional(),
  sex: z.string().min(5, "Please add a text").default("Male").optional(),
  keywords: z.array(z.string()).default([]),
});

export const validateFormInput = (values: z.infer<typeof Form>) => {
  const parsedData = Form.parse(values);

  return parsedData;
};

console.log(
  validateFormInput({ name: "Ben", phoneNumber: "043409394", keywords: [] }),
);


