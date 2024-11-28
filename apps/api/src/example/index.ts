import { Router } from "express";

export class Example {
  router: Router = Router();
  constructor() {
    this.router.get("/", (req, res) => {
      let resp: any = { ok: true };
      if (req.auth.userId) {
        resp.isAuthenticated = true;
      } else {
        resp.isAuthenticated = false;
      }
      return res.json(resp);
    });
  }
}
