import db from '../../db';
import { jobTable, providerTable } from '../../db/schema';

enum JobStatus {
  NOTIFYING = 'NOTIFYING',
}

const createJob = async () => {
  try {
    const mockJob = {
      payment_sum: '10000000000',
      payment_sum_cents: 1000000,
      balance_cents: 100000,
      is_abandoned: false,
      customer_ref: 'sajan93fw',
      provider_callout_cents: 1000000,
      provider_rate_cents: 100000,
      charge_callout_cents: 100000,
      charge_rate_cents: 100000,
      charge_fuel_surcharge_cents: 100000,
      status_id: JobStatus.NOTIFYING,
    };
    console.log('Inserting....');
    await db.db.insert(jobTable).values(mockJob);
    console.log('Done....');
  } catch (e) {
    console.error('Something went wrong', e);
  }
};

createJob();
