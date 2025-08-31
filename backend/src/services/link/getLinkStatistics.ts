import { prisma } from "../../services/db";
export async function getLinkStatistic(shortLink: string) {
     const result = await prisma.shortLink.findUnique({
          where: { shortUrl: shortLink },
          include: { users: true },
     });
     return result;
}
