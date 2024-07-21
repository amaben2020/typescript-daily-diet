import db from '../../db';
import { providerTable } from '../../db/schema';

const createProvider = async () => {
  try {
    const mockProvider = {
      firstName: 'Benneth',
      lastName: 'Uzor',
      email: 'amaben202phantom@gmail.com',
      city: 'Karu',
      state: 'Abuja',
      notifications: true,
      phone: '07037413090',
      acceptedRate: 22.0,
    };
    console.log('Inserting....');
    await db.db.insert(providerTable).values(mockProvider);
    console.log('Done....');
  } catch (e) {
    console.error('Something went wrong');
  }
};

createProvider();
