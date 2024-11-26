import { Router } from "express";

export class Orchestrator {
  router: Router = Router();
  constructor() {
    this.router.get("/status", (_, res) => {
      return res.json({ ok: true });
    });
  }
}
