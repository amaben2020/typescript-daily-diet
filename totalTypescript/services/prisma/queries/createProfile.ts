import prisma from '../lib/prisma';

async function main() {
  await prisma.profile.create({
    data: {
      userId: 2,
      username: 'algomachine2',
      email: 'amaben202phantom@gmail2.com',
      occupation: 'Software Engineer 2',
    },
  });

  const allProfile = await prisma.profile.findMany({
    include: {
      user: true,
    },
  });
  console.dir(allProfile, { depth: null });
}
main();
