import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { Pool } from 'pg';

// Check if the variables are defined
// const { DATABASE_URL } = process.env as unknown as { DATABASE_URL: string };
// if (!DATABASE_URL) {
//   throw new Error('DATABASE_URL not set in .env file');
// }

export const pool = new Pool({
  connectionString:
    'postgresql://postgres:postgres@localhost:5432/EdemedeDB?schema=public',
});

const db = drizzle(pool as any, {
  schema,
});

export default { db };
