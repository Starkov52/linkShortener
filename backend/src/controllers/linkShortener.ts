import { Request, Response } from "express";
import { urlAPI } from "../config";
import axios from "axios";
import { IPResponse } from "../types";
import { getOSName } from "../utils/getOSName";
import { prisma } from "../services/db";
import { createLink } from "../services/link/createLink";
export async function cutLink(request: Request, response: Response) {
     const originalURL: string = request.body.url;
     const userAgent: string | undefined = request.headers["user-agent"];
     if (!originalURL) {
          response.json({ message: "Неверный формат URL" });
     }
     try {
          if (!userAgent) return;
          const responseData: IPResponse = (await axios.get(urlAPI)).data;
          const browserMatch = userAgent?.match(/(Firefox|Edge|Chrome|Safari)[\/ ]([\d.])/) || [];
          const userInfo = {
               date: new Date().toString(),
               ip: responseData.ip.toString(),
               region: responseData.region.toString(),
               browser: browserMatch[0]?.toString(),
               os: getOSName(userAgent as string),
          };
          const newLinkURL: string = `http://localhost:3000/shortLink/${Math.floor(Math.random() * 100000).toString()}`;
          createLink(originalURL, newLinkURL);
          response.json(newLinkURL);
     } catch (error: any) {
          console.error(error.message);
     }
}
