import { Response, Request } from "express";
import { prisma } from "../services/db";
export async function showStatistics(request: Request, response: Response) {
     const linkId: string | undefined = request.params.linkId;
     if (!linkId) return response.json("Отсутсвует параметр 'linkId'");
     const shortLink: string = "https://linkShortener/" + linkId;
     try {
          const linkInfo: any = await prisma.shortLink.findUnique({
               where: { shortUrl: shortLink },
               include: { users: true },
          });
          if (!linkInfo) {
               return response.json({ message: "Ссылка не обнаружена" });
          }
          response.json(linkInfo);
     } catch (error: any) {
          console.error(error.message);
     }
}
