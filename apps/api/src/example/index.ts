import { Router } from "express";

export class Example {
  router: Router = Router();
  constructor() {
    this.router.get("/status", (_, res) => {
      return res.json({ ok: true });
    });
  }
}
