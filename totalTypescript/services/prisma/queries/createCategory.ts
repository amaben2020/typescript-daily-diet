import prisma from '../lib/prisma';

enum Category {
  ai = 'ai',
  tech = 'tech',
  lifestyle = 'lifestyle',
}

async function main() {
  await prisma.category.create({
    data: {
      name: Category.ai,
    },
  });

  const allPosts = await prisma.category.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(allPosts, { depth: null });
}
main();
