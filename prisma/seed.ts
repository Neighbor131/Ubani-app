/**
 * Prisma seed script populating the Ubani schema with realistic sample data.
 */
import { PrismaClient, PostType, MembershipRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.rating.deleteMany();
  await prisma.message.deleteMany();
  await prisma.chatThread.deleteMany();
  await prisma.post.deleteMany();
  await prisma.membership.deleteMany();
  await prisma.samezoblo.deleteMany();
  await prisma.user.deleteMany();

  const samezoblo = await prisma.samezoblo.create({
    data: {
      name: "Asuquo Lane Circle",
      slug: "asuquo-lane-circle",
      latitude: 5.021,
      longitude: 7.912,
      radiusM: 450,
      description: "A vibrant Samezoblo stretching three blocks around Asuquo Lane."
    }
  });

  const amaka = await prisma.user.create({
    data: {
      email: "amaka@example.com",
      fullName: "Amaka Iwobi",
      yearsInNeighborhood: 4,
      badges: ["Organizer", "Helper"],
      bio: "Community gardener and errand coordinator."
    }
  });

  const uche = await prisma.user.create({
    data: {
      email: "uche@example.com",
      fullName: "Uche Nnamdi",
      yearsInNeighborhood: 2,
      badges: ["Helper"],
      bio: "Always available for last-minute errands."
    }
  });

  await prisma.membership.createMany({
    data: [
      {
        userId: amaka.id,
        samezobloId: samezoblo.id,
        role: MembershipRole.ORGANIZER
      },
      {
        userId: uche.id,
        samezobloId: samezoblo.id,
        role: MembershipRole.MEMBER
      }
    ]
  });

  const post = await prisma.post.create({
    data: {
      type: PostType.ERRAND,
      title: "Need ladder to fix balcony light",
      body: "Could anyone lend a tall ladder for an hour this evening? Happy to return with fresh pastries!",
      tags: ["Borrow", "Home"],
      authorId: uche.id,
      samezobloId: samezoblo.id
    }
  });

  const thread = await prisma.chatThread.create({
    data: {
      ownerId: uche.id,
      participantId: amaka.id,
      postId: post.id
    }
  });

  await prisma.message.createMany({
    data: [
      {
        threadId: thread.id,
        authorId: uche.id,
        body: "Hi Amaka! Saw you help folks with tools—any chance you have a ladder I could borrow tonight?"
      },
      {
        threadId: thread.id,
        authorId: amaka.id,
        body: "Absolutely! Stop by around 6pm and I’ll hand it over."
      }
    ]
  });

  await prisma.rating.create({
    data: {
      score: 5,
      comment: "Prompt pickup and friendly neighbor!",
      postId: post.id,
      fromUserId: amaka.id,
      toUserId: uche.id
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
