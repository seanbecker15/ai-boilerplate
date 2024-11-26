import { log } from "@ai-contributor/logger";

export class AuthService {
  constructor() {
    log("AuthService constructor");
  }

  doSomething(): string {
    return "AuthService did something";
  }
}
