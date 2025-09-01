import { Request, Response } from "express";
import { createLink } from "../services/link/createLink";
export async function cutLink(request: Request, response: Response) {
    const originalURL: string = request.body.url;
    const userAgent: string | undefined = request.headers["user-agent"];
    if (!new URL(originalURL)) {
        return response.status(400).json({ error: "Неверный формат URL" });
    }
    try {
        if (!userAgent) {
            return response.status(400).json({ error: "User-Agent данные являются обязательными" });
        }
        const newLinkURL: string = `http://localhost:3000/shortLink/${Math.floor(Math.random() * 100000).toString()}`;
        await createLink(originalURL, newLinkURL);
        return response.json(newLinkURL);
    } catch (error: any) {
        console.error(error.message);
        return response.status(500).json({ error: "ошибка сервера" });
    }
}
