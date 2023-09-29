import { z } from "zod";

const MappedUser = z.map(z.string(), z.object({ name: z.string() }));

const userMap = new Map([]);
