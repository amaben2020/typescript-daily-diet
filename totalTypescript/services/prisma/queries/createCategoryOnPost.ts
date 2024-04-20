import prisma from '../lib/prisma';

async function main() {
  const userId = 1;
  await prisma.categoriesOnPost.create({
    data: {
      assignedBy: 'algomachine',
      postId: 1,
      categoryId: 1,
      assignedAt: new Date(),
    },
  });

  const categoriesOnPost = await prisma.categoriesOnPost.findMany({
    include: {
      post: true,
      category: true,
    },
  });
  console.dir(categoriesOnPost, { depth: null });
}
main();
