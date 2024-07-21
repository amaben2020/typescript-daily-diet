import { eq } from 'drizzle-orm';
import db from '../../db';
import { jobTable, providerTable } from '../../db/schema';

const fetchProviders = async () => {
  try {
    const result = await db.db.query.providerTable.findMany({
      with: {
        jobs: true,
      },
    });

    const result2 = await db.db
      .select()
      .from(providerTable)
      .leftJoin(jobTable, eq(providerTable.id, jobTable.providerId));
    console.log(JSON.stringify(result, null, 2));
    // console.log(JSON.stringify(result2, null, 2));

  } catch (error) {
    console.log(error);
  }
};

fetchProviders();
