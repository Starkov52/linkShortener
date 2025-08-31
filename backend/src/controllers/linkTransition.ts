import { Response, Request } from "express";
import { prisma } from "../services/db";
import type { IPResponse } from "../types";
import axios from "axios";
import { urlAPI } from "../config";
import { getOSName } from "../utils/getOSName";
export async function transitionLink(request: Request, response: Response) {
     const linkId: string | undefined = request.params.linkId;
     const userAgent: string | undefined = request.headers["user-agent"];
     if (!linkId) return response.json("Отсутсвует параметр 'linkId'");
     const shortLink: string = "https://linkShortener/" + linkId;
     try {
          const linkInfo: any = await prisma.shortLink.findUnique({
               where: { shortUrl: shortLink },
          });
          if (!linkInfo) {
               return response.json({ message: "Ссылка не обнаружена" });
          }
          // aaaaaaaaaaa
          const responseData: IPResponse = (await axios.get(urlAPI)).data;
          const browserMatch = userAgent?.match(/(Firefox|Edge|Chrome|Safari)[\/ ]([\d.])/) || [];
          const userInfo = {
               date: new Date().toString(),
               ip: responseData.ip.toString(),
               region: responseData.region.toString(),
               browser: browserMatch[0]?.toString(),
               os: getOSName(userAgent as string),
          };
          const originanLink: string = linkInfo.originalUrl;
          const a = 1 + 1;
          response.redirect(originanLink);
     } catch (error: any) {
          console.error(error.message);
     }
}
