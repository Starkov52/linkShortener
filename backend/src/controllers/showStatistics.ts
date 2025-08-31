import { Response, Request } from "express";
import { prisma } from "../services/db";
import { getLinkStatistic } from "../services/link/getLinkStatistics";
export async function showStatistics(request: Request, response: Response) {
     const linkId: string | undefined = request.params.linkId;
     if (!linkId) return response.json("Отсутсвует параметр 'linkId'");
     const shortLink: string = "http://localhost:3000/shortLink/" + linkId;
     try {
          const linkInfo: any = await getLinkStatistic(shortLink);
          if (!linkInfo) {
               return response.json({ message: "Ссылка не обнаружена" });
          }
          response.json(linkInfo);
     } catch (error: any) {
          console.error(error.message);
     }
}
