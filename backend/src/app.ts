import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { port } from "./config";
import routerForCutLink from "./routes/linkShortener";
import routerForStatistics from "./routes/showStatistics";
import routerForTransition from "./routes/linkTransition";
import { setupSwagger } from "../src/swagger";
export function startServer(type: "SERVER" | "TEST") {
     const app = express();
     app.use(cookieParser());
     app.use(cors());
     app.use(express.json());
     app.use("/shortLink/send", routerForCutLink);
     app.use("/shortLink/statistics", routerForStatistics);
     app.use("/shortLink", routerForTransition);
     setupSwagger(app);
     if (type === "SERVER") {
          app.listen(port, "0.0.0.0", () => {
               console.log(`Сервер работает на порту: ${port}`);
               console.log(`API документация: http://localhost:${port}/api-docs`);
          });
     } else {
          return app;
     }
}
