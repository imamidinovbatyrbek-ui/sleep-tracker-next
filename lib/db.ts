import * as PrismaPkg from '@prisma/client';

declare global {
    var prisma: any | undefined;
}

const PrismaClient: any = (PrismaPkg as any).PrismaClient ?? (PrismaPkg as any).default;

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}