import { eq } from 'drizzle-orm';
import db from '../../db';
import { jobRequestTable, providerTable } from '../../db/schema';

const declineJobByProvider = async () => {
  // get only job  that's unread
  const unacceptedJobRequest = await db.db
    .select()
    .from(jobRequestTable)
    .where(eq(jobRequestTable.status_id, 'UNREAD'))
    .leftJoin(providerTable, eq(jobRequestTable.providerId, providerTable.id));

  const PROVIDER_TO_UPDATE = 2;

  if (unacceptedJobRequest.length) {
    await db.db
      .update(jobRequestTable)
      .set({
        status_id: 'DECLINE',
      })
      .where(eq(jobRequestTable.providerId, PROVIDER_TO_UPDATE));
  }
};

declineJobByProvider();
