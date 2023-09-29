import { z } from "zod";

const SchemaDef = z.object({
  id: z.string().or(z.number()),
  coords: z.tuple([z.number(), z.number(), z.number()]),
  oil: z.tuple([z.number().gt(900), z.number(), z.number()]).rest(z.number()),
  info: z.discriminatedUnion("status", [
    z.object({ status: z.literal("success"), data: z.string() }),
    z.object({ status: z.literal("failed"), error: z.instanceof(Error) }),
  ]),
});

const location = {
  id: 3,
  coords: [1232.3234, 43433.322, 332.32443],
  oil: [3230, 332, 32332, 455, 456, 6565757],
  // info: {
  //   status: "success",
  //   data: "JKSNVJK",
  // },

  info: {
    status: "failed",
    error: "JKSNVJK",
  },
};

const result = SchemaDef.parse(location);

console.log(result);
