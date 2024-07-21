import { eq } from 'drizzle-orm';
import db from '../../db';
import { jobTable } from '../../db/schema';

const updateJob = async () => {
  try {
    await db.db
      .update(jobTable)
      .set({
        providerId: 1,
        provider_rate_cents: 50,
      })
      .where(eq(jobTable.id, 4));
  } catch (error) {
    console.log('ERROR', error);
  }
};

updateJob();
