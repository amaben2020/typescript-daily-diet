import { getUser } from '../../../async';
import { db } from '../db';
import { UsersTable } from '../db/schema';
async function getUserAndPreferences() {
  const user = await db.query.UsersTable.findMany();
  console.log(user);
}

getUserAndPreferences();
