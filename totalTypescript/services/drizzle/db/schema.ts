import { relations } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod/pg';
import {
  timestamp,
  pgTable,
  uuid,
  varchar,
  pgEnum,
  index,
  boolean,
  real,
  integer,
  primaryKey,
  serial,
  text,
  numeric,
  doublePrecision,
} from 'drizzle-orm/pg-core';

export const UserRole = pgEnum('user_role', ['ADMIN', 'BASIC']);

export const UsersTable = pgTable(
  'userInfo',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull().unique(),
    created_at: timestamp('created_at').defaultNow(),
    role: UserRole('user_role').default('BASIC').notNull(),
  },
  (table) => {
    return {
      emailIndex: index('emailIndex').on(table.email),
    };
  }
);
// create UserTableRelation that is a 1 to 1 relation with UserPreferenceTable and 1 to many with PostsTable
export const UserPreferenceTable = pgTable('user_preference', {
  id: uuid('id').primaryKey().defaultRandom(),
  email_updates: boolean('email_updates').default(false),
  user_id: uuid('user_id')
    .references(() => UsersTable.id)
    .notNull(),
});
// ✅ create UserPreferencesTableRelation that is a 1 to 1 relation with UsersTable
export const UserToPreferenceTableRelation = relations(
  UserPreferenceTable,
  ({ one }) => ({
    preference: one(UsersTable, {
      fields: [UserPreferenceTable.user_id],
      references: [UsersTable.id],
    }),
  })
);

// create PostTableRelation that is a 1 to 1 relation with UsersTable and many to many with CategoryTable

export const PostTable = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  title: varchar('title').notNull(),
  average_rating: real('average_rating').notNull().default(0),
  author_id: uuid('author_id')
    .references(() => UsersTable.id)
    .notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// one to MANY START
export const PostTableRelation = relations(PostTable, ({ one }) => ({
  author: one(UsersTable, {
    fields: [PostTable.author_id],
    references: [UsersTable.id],
  }),
}));

export const UserToPostsRelation = relations(UsersTable, ({ many }) => ({
  posts: many(PostTable),
}));

// ONE TO MANY END

// create CategoryTableRelation that is many to many with PostTable
// create PostCategoryTableRelation that is many to many with PostTable and CategoryTable

export const CategoryTable = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
});

// another way to handle many to many
// export const PostCategoryTable = pgTable('post_category', {
//   post_id: uuid('post_id')
//     .references(() => PostTable.id)
//     .notNull(),
//   category_id: uuid('category_id')
//     .references(() => CategoryTable.id)
//     .notNull(),
// });

export const postsRelations = relations(PostTable, ({ many }) => ({
  postToCategories: many(postToCategory),
}));

// JOIN table that you should insert into
export const postToCategory = pgTable(
  'posts_to_category',
  {
    postId: uuid('post_id')
      .notNull()
      .references(() => PostTable.id),

    categoryId: uuid('category_id')
      .notNull()
      .references(() => CategoryTable.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.postId, t.categoryId] }),
  })
);

export const postToCategoryRelations = relations(postToCategory, ({ one }) => ({
  category: one(CategoryTable, {
    fields: [postToCategory.categoryId],
    references: [CategoryTable.id],
  }),
  post: one(PostTable, {
    fields: [postToCategory.postId],
    references: [PostTable.id],
  }),
}));

// Start: Provider,  Jobs, JobRequests logic

// providerLocations
export const providerTable = pgTable('provider', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').unique().notNull(),
  city: text('city').unique().notNull(),
  state: text('state').unique().notNull(),
  notifications: boolean('notifications').default(false),
  phone: numeric('phone_number').notNull(),
  acceptedRate: real('accepted_rate'),
  stripeAccountId: varchar('stripe_account_id', { length: 255 })
    .unique()
    .notNull(),
  // ensure that one provider could be assigned many jobs
});

export const jobStatus = pgEnum('job_status', [
  'NOTIFYING',
  'ACCEPTED',
  'REJECTED',
]);

export const jobRequestStatus = pgEnum('job_request_status', [
  'ACCEPT',
  'DECLINE',
  'UNREAD',
]);

export const jobTable = pgTable('job', {
  id: serial('id').primaryKey(),
  providerId: integer('provider_id').references(() => providerTable.id),
  payment_sum: numeric('payment_sum').default('0'),
  payment_sum_cents: integer('payment_sum_cents').notNull().default(0),
  balance_cents: integer('balance_cents').notNull().default(0),
  is_abandoned: boolean('is_abandoned').default(false),
  customer_ref: varchar('customer_ref', { length: 256 }),
  provider_callout_cents: integer('provider_callout_cents')
    .notNull()
    .default(0),
  provider_rate_cents: integer('provider_rate_cents').notNull().default(0),
  charge_callout_cents: integer('charge_callout_cents').notNull(),
  charge_rate_cents: integer('charge_rate_cents').notNull(),
  charge_fuel_surcharge_cents: integer('charge_fuel_surcharge_cents').notNull(),
  status_id: jobStatus('job_status').default('NOTIFYING').notNull(),
});

// a job request with the provider and job, could be accepted or declined by provider
export const jobRequestTable = pgTable('job_request', {
  id: serial('id').primaryKey(),
  providerId: integer('provider_id').references(() => providerTable.id),
  jobId: integer('job_id').references(() => jobTable.id),
  status_id: jobRequestStatus('job_request_status').default('UNREAD').notNull(),
  distance: doublePrecision('distance'),
  duration: doublePrecision('duration'),
});

// one provider can do many jobs
export const AllProviderRelations = relations(providerTable, ({ many }) => ({
  jobs: many(jobTable),
}));

// one job can be done by a provider
export const JobProviderRelations = relations(jobTable, ({ one, many }) => ({
  provider: one(providerTable, {
    fields: [jobTable.providerId],
    references: [providerTable.id],
  }),
}));

export const JobRequestRelations = relations(jobRequestTable, ({ one }) => ({
  provider: one(providerTable, {
    fields: [jobRequestTable.providerId],
    references: [providerTable.id],
  }),
  job: one(jobTable, {
    fields: [jobRequestTable.jobId],
    references: [jobTable.id],
  }),
}));

//https://www.npmjs.com/package/drizzle-zod/v/0.1.3-df47cf6
// this converts the schema to zod
const updateProviderSchema = createInsertSchema(providerTable, 'snake').pick({
  city: true,
});
