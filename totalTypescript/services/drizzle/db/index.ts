import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';
import { UsersTable } from './schema';
import * as schema from './schema';

const queryClient = postgres(process.env.DATABASE_URL!);
// We will use the exported variable to query our db:
export const db = drizzle(queryClient, {
  schema,
});
