import { z } from "zod";

const PromiseSchema = z.promise(z.string());

const promise = Promise.resolve("amaben");

console.log(PromiseSchema.parse(promise));
