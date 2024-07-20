import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { Pool } from 'pg';

export const pool = new Pool({
  connectionString:
    'postgresql://postgres:postgres@localhost:5432/EdemedeDB?schema=public',
});

const db = drizzle(pool as any, {
  schema,
});

export default { db };
