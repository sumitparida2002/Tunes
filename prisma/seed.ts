// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import { songs } from "../data/songs";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: `sumit`,
      role: "ADMIN",
      password: "sumit",
    },
  });

  await prisma.song.createMany({
    data: songs,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
