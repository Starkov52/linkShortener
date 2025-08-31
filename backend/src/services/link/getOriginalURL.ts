import { prisma } from "../../services/db";
export async function getOriginalURL(shortLink: string) {
     const linkInfo: any = await prisma.shortLink.findUnique({
          where: { shortUrl: shortLink },
     });
     return linkInfo;
}
