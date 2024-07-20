import { relations } from 'drizzle-orm';

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

const providerTable = pgTable('provider', {
  id: serial('id'),
});
