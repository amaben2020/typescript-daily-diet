// You might need to create your own custom validations in scenarios where you need to club, for example, error messages together, codes, etc.

import { z } from "zod";

// refine: refine is an API that takes in two arguments, the first being a function and the second argument accepting a number of configuration options (in special cases, the second argument can be a function as well). You can use refine to custom validate the length of the string as in the following case

const userBio = z.string().refine((i) => i.length <= 255, {
  // overrides the error message here
  message: "Your bio cannot be more than 255 characters",
});

const isSubscribed = z.string().refine(async (i) => {
  // async operation that takes some time to return
  return true;
});

const brandEmail = z
  .string()
  .email()
  .refine((value) => value.endsWith("@bejamas.io"), {
    message: "You must be a Bejamas staff",
  });

const email = "benneth@bejamas.io";

const confirmedEmail = brandEmail.parse(email);

console.log(confirmedEmail);
