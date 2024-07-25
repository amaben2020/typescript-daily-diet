import { z } from 'zod';
// merge and extend: https://zod.dev/?id=extend
const appUserInfo = {
  name: 'Amala',
  email: 'amaben@bejamas.io',
  password: '12345',
};
const appUserPermission = {
  authLevel: 3,
  isAdmin: false,
};

const mergedUser = { ...appUserInfo, ...appUserPermission };

const AppUserInfoSchema = z.object({
  name: z.string().min(5),
  email: z.string().min(5).email(),
  password: z.string().min(5),
});

// extend
const AppUserInfoAndPermiossionSchema = AppUserInfoSchema.extend({
  authLevel: z.number(),
  isAdmin: z.boolean(),
});

//merge: only difference between extend and merge is that merge brings 2 separate schemas together, extends pretends you're adding to the schema.
const mergedSchemas = AppUserInfoSchema.merge(
  z.object({
    authLevel: z.number(),
    isAdmin: z.boolean(),
  })
);

const logInfo = () => {
  return AppUserInfoAndPermiossionSchema.safeParse(mergedUser);
};

const logInfo2 = () => {
  return mergedSchemas.safeParse(mergedUser);
};

type TMErged = z.infer<typeof mergedSchemas>;

const me: TMErged = mergedUser;

console.log(logInfo());
console.log(logInfo2());
