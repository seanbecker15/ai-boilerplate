import { Router } from "express";

export class Example {
  router: Router = Router();
  constructor() {
    this.router.get("/", (req, res) => {
      const resp: Record<string, unknown> = { ok: true };
      if (req.auth.userId) {
        resp.isAuthenticated = true;
      } else {
        resp.isAuthenticated = false;
      }
      return res.json(resp);
    });
  }
}
