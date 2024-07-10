import db from './db';
import { UsersTable } from './db/schema';

async function main() {
  await db.db.insert(UsersTable).values({
    name: 'Alice',
    email: 'saa@sas.ss',
  });
}

main();
