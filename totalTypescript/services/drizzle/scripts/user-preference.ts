import db from '../db';
import { UsersTable } from '../db/schema';

async function getUserAndPreferences() {
  // const user = await db.db.query.UsersTable.findMany({});
  const user = await db.db.query.UserPreferenceTable.findMany({
    with: {
      preference: true,
    },
  });

  console.log(user);
}

getUserAndPreferences();
