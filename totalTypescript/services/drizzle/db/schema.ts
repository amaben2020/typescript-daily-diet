import { relations } from 'drizzle-orm';
import {
  serial,
  text,
  timestamp,
  pgTable,
  uuid,
  varchar,
  pgEnum,
  index,
  boolean,
  real,
  integer,
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

export const UserToPreferenceTableRelation = relations(
  UserPreferenceTable,
  ({ one }) => ({
    preference: one(UsersTable, {
      fields: [UserPreferenceTable.user_id],
      references: [UsersTable.id],
    }),
  })
);

// create UserPreferencesTableRelation that is a 1 to 1 relation with UsersTable

// create PostTableRelation that is a 1 to 1 relation with UsersTable and many to many with CategoryTable
// create CategoryTableRelation that is many to many with PostTable
// create PostCategoryTableRelation that is many to many with PostTable and CategoryTable

export const PostTable = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title').notNull(),
  average_rating: real('average_rating').notNull().default(0),
  author_id: uuid('author_id')
    .references(() => UsersTable.id)
    .notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const CategoryTable = pgTable('categories', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
});

export const PostCategoryTable = pgTable('post_category', {
  post_id: uuid('post_id')
    .references(() => PostTable.id)
    .notNull(),
  category_id: uuid('category_id')
    .references(() => CategoryTable.id)
    .notNull(),
});
