import { PrismaClient } from "@/app/generated/prima";

const prisma = new PrismaClient({
    log: ["query"]
});


export default prisma;