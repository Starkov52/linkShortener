import { Router } from "express";
import { showStatistics } from "../controllers/showStatistics";

/**
 * @swagger
 * /shortLink/statistics/{linkId}:
 *   get:
 *     summary: Получение статистики переходов по ссылке
 *     parameters:
 *       - name: linkId
 *         in: path
 *         description: Параметр для поиска ссылки
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Успешно
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 originalUrl:
 *                   type: string
 *                   example: "https://www.youtube.com/"
 *                 shortUrl:
 *                   type: string
 *                   example: "https://linkShortener/12345"
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-08-30T14:00:00.000Z"
 *                       ip:
 *                         type: string
 *                         example: "192.168.1.1"
 *                       region:
 *                         type: string
 *                         nullable: true
 *                         example: "Kyiv, Ukraine"
 *                       browser:
 *                         type: string
 *                         nullable: true
 *                         example: "Chrome 115.0"
 *                       os:
 *                         type: string
 *                         nullable: true
 *                         example: "Windows 10"
 *       400:
 *         description: Ошибка параметра
 */

const routerForStatistics = Router();
routerForStatistics.get("/:linkId", showStatistics);
export default routerForStatistics;
