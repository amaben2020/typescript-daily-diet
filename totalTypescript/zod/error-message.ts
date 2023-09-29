import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z.number().max(120, { message: "Age cannot be greater than 120" }),
  email: z.string().email({ message: "Email must be a valid email address" }),
});

const validateId = (id: string) => id.toString().includes("a");

const refine = z.object({
  id: z.string().refine(async (value) => {
    // Perform async validation
    const isValid = await validateId(value);
    if (!isValid) {
      return false;
    }
    return value;
  }),
});

