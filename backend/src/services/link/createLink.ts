import { prisma } from "../../services/db";
export async function createLink(originalURL: string, newLinkURL: string) {
     await prisma.shortLink.create({
          data: {
               originalUrl: originalURL,
               shortUrl: newLinkURL,
          },
     });
}
