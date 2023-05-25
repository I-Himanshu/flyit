import { PrismaClient } from '@prisma/client';

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient({
    log: ['query', 'info', 'warn'],
});

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;