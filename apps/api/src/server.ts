import { json, urlencoded } from "body-parser";
import express, { type Express } from "express";
import type { AuthObject } from "@clerk/express";
import { clerkMiddleware } from "@clerk/express";
import morgan from "morgan";
import cors from "cors";

declare global {
  namespace Express {
    interface Request {
      auth: AuthObject;
    }
  }
}

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(clerkMiddleware())
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return app;
};
