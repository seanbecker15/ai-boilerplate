import type { User } from "@prisma/client";
import { log } from "@ai-contributor/logger";
import { prisma } from "./client";


const DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: "Tim Apple",
    email: "tim@apple.com",
  },
] as Partial<User>[];

void (async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: {
            email: user.email ?? '',
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        }),
      ),
    );
  } catch (error) {
    log(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
