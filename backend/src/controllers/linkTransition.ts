import { Response, Request } from "express";
import type { IPResponse, LinkInfo } from "../types";
import axios from "axios";
import { urlAPI } from "../config";
import { getOSName } from "../utils/getOSName";
import { getOriginalURL } from "../services/link/getOriginalURL";
import { addUserToUrl } from "../services/link/addUserToLink";
import { UserDataType } from "../types";
export async function transitionLink(request: Request, response: Response) {
    const linkId: string | undefined = request.params.linkId;
    const userAgent: string | undefined = request.headers["user-agent"];
    if (!linkId) {
        return response.status(400).json({ error: "Отсутсвует параметр 'linkId'" });
    }
    const shortLink: string = "http://localhost:3000/shortLink/" + linkId;
    try {
        const linkInfo: LinkInfo = await getOriginalURL(shortLink);
        if (!linkInfo) {
            return response.status(400).json({ message: "Ссылка не обнаружена" });
        }
        const responseData: IPResponse = (await axios.get(urlAPI)).data;
        const browserMatch = userAgent?.match(/(Firefox|Edge|Chrome|Safari)[\/ ]([\d.])/) || [];
        const userInfo: UserDataType = {
            date: new Date().toISOString(),
            ip: responseData.ip.toString(),
            region: responseData.region || null,
            browser: browserMatch[0]!,
            os: getOSName(userAgent as string),
        };
        const originanLink: string = linkInfo.originalUrl;
        await addUserToUrl(originanLink, shortLink, userInfo);
        response.redirect(originanLink);
    } catch (error: any) {
        console.error(error.message);
        return response.status(500).json({ error: "ошибка сервера" });
    }
}
