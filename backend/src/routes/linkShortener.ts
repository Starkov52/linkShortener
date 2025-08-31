import { Router } from "express";
import { cutLink } from "../controllers/linkShortener";

/**
 * @swagger
 * /shortLink/send/:
 *   post:
 *     summary: Замена оригинальной ссылки + сбор данных пользователя
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://www.youtube.com/"
 *             required:
 *               - url
 *     responses:
 *       200:
 *         description: Замененный URL
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "http://shortLink/12345"
 *       400:
 *         description: Невалидный URL
 */
const routerForCutLink = Router();
routerForCutLink.post("/", cutLink);
export default routerForCutLink;
