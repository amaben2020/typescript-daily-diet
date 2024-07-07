import 'dotenv/config';
import type { Config } from 'drizzle-kit';

const config: Config = {
  // schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  schema: './db/schema.ts',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};

export default config;
