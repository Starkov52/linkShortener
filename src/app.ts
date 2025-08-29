import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { port } from "./config";
import routerForCutLink from "../src/routes/cutLinkAPI";
export function startServer(type: "SERVER" | "TEST") {
     const app = express();
     app.use(cookieParser());
     app.use(cors());
     app.use(express.json());
     app.get("cutLink/send", routerForCutLink);
     if (type === "SERVER") {
          app.listen(port, "0.0.0.0", () => {
               console.log(`🚀 Сервер работает на порту: ${port}`);
               console.log(`📝 API документация: http://localhost:${port}/api-docs`);
          });
     } else {
          return app;
     }
}
