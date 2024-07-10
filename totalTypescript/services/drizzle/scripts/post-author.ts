import { eq } from 'drizzle-orm';
import db from '../db';
import { PostTable, UsersTable } from '../db/schema';

async function PostAndAuthor() {
  const postsWithAuthor = await db.db.query.PostTable.findMany({});

  const user = await db.db.query.UsersTable.findMany({});
  const createPost = await db.db
    .insert(PostTable)
    .values({
      title: 'Inspe gloria de',
      author_id: user[0].id,
      average_rating: 4.5,
    })
    .returning({
      title: PostTable.title,
    });

  const usersWithPost = await db.db
    .select()
    .from(PostTable)
    .leftJoin(UsersTable, eq(PostTable.author_id, UsersTable.id));

  console.log('usersWithPost', usersWithPost);
}

PostAndAuthor();
