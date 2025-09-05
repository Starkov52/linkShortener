import { Response, Request } from "express";
import { getLinkStatistic } from "../services/link/getLinkStatistics";
import { ShortLinkType } from "../types";
export async function showStatistics(request: Request, response: Response) {
    const linkId: string | undefined = request.params.linkId;
    if (!linkId) return response.status(400).json("Отсутсвует параметр 'linkId'");
    const shortLink: string = "http://localhost:3000/shortLink/" + linkId;
    try {
        const linkStatistics: ShortLinkType | null = await getLinkStatistic(shortLink);
        if (!linkStatistics) {
            return response.status(400).json({ message: "Ссылка не обнаружена" });
        }
        console.log(linkStatistics);
        response.json(linkStatistics);
    } catch (error: any) {
        console.error(error.message);
        return response.status(500).json({ error: "ошибка сервера" });
    }
}
