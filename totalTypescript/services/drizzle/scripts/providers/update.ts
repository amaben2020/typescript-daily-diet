import { providerTable, updateProviderSchema } from '../../db/schema';

// .$inferInsert:  This is a Drizzle ORM utility function. It infers the TypeScript type of the data that can be inserted into the providerTable.  In other words, it figures out what the object you'd pass to db.insert(providerTable).values(...) should look like, based on your table schema.
export type TProvider = typeof providerTable.$inferInsert;

const updateProvider = async (provider: TProvider) => {
  const providerUpdateDetails = {
    firstName: '',
  };
  const dataToUpdate = updateProviderSchema.parse(provider);
};
