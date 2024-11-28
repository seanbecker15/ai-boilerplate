import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
} & typeof global;

export const prisma = globalThis.prismaGlobal || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export * from "@prisma/client";
