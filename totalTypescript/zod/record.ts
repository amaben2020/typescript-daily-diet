import { z } from "zod";

const UserMap = z.record(z.string());
const UserMapStringAndNumber = z.record(z.string(), z.number());

console.log(
  UserMap.parse({
    fsFS: "sasa",
    sasa: 3,
  }),
);

console.log(
  UserMapStringAndNumber.parse({
    fsFS: 2,
    sasa: 3,
  }),
);
