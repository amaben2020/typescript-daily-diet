import prisma from '../lib/prisma';

async function main() {
  const userId = 1;
  await prisma.post.create({
    data: {
      title: 'Elevate',
      authorId: userId,
      categories: {
        connect: [{ postId: 1, categoryId: 1 }],
      },
    },
  });

  const allPosts = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });
  console.dir(allPosts, { depth: null });
}
main();
