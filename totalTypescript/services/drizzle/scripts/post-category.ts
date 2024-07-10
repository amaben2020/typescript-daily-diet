import db from '../db';
import { PostTableRelation, postToCategory } from '../db/schema';

async function postsAndCategory() {
  // get the category id you wanna connect
  // get the Post id you wanna connect
  // connect them and view the response

  const categoryId = await db.db.query.CategoryTable.findMany({});
  const postId = await db.db.query.PostTable.findMany({});

  console.log('categoryId', categoryId);
  console.log('postId', postId);

  if (categoryId.length === 0 || postId.length === 0) {
    console.log('No categories or posts found.');
    return;
  }

  // when you wanna insert a category and post to the JOIN table, on the frontend, this would be mapping the checkbox ids that does this before creation.

  // const assignPostsAndCategory = await db.db
  //   .insert(postToCategory)
  //   .values([
  //     {
  //       postId: postId[0].id,
  //       categoryId: categoryId[0].id,
  //     },

  //     {
  //       postId: postId[1].id,
  //       categoryId: categoryId[1].id,
  //     },
  //   ])
  //   .returning({
  //     id: postToCategory.categoryId,
  //   });

  // fetching the data from db
  const postToCategoryData = await db.db.query.postToCategory.findMany({
    with: {
      post: true,
      category: true,
    },
  });
  console.log('Assigned posts to categories:', postToCategoryData);
}

console.log('postsAndCategory()', postsAndCategory());
