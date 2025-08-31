import { prisma } from "../../services/db";
import { getOriginalURL } from "./getOriginalURL";
export async function addUserToUrl(originalURL: string, newLinkURL: string, userInfo: any) {
     const original = await getOriginalURL(newLinkURL);
     await prisma.userData.create({
          data: {
               date: userInfo.date,
               ip: userInfo.ip,
               region: userInfo.region,
               browser: userInfo.browser ?? null,
               os: userInfo.os,
               shortLinkId: original.id,
          },
     });
}
