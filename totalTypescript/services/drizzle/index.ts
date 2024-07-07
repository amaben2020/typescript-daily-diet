import { db } from './db/index';
import { users } from './db/schema';
async function main() {
  await db.insert(users).values({
    name: 'Alice',
    email: 'saa@sas.ss',
  });
}

main();
