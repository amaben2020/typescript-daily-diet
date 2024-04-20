import prisma from '../lib/prisma';

async function main() {
  await prisma.user.create({
    data: {
      // profile: {
      //   create: {
      //     username: "",
      //     email: ""
      //   }
      // },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}
main();
