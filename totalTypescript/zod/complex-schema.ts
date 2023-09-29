import { z } from "zod";

const GenericStringContraint = z.string().min(1).max(18);

const FormDataC = z.object({
  firstName: GenericStringContraint,
  lastName: GenericStringContraint,
  // ...
});

const UserData = z.object({
  userId: z.string().min(1).max(5),
  fullName: z.string().min(1).max(18),
});

const Article = UserData.extend({
  title: z.string().min(5),
  date: z.date(),
});

const UserProfile = UserData.extend({
  isVerifield: z.boolean(),
  numberOfArticles: z.number().positive(),
});
