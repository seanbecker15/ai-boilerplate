import { log } from "@ai-contributor/logger";

export class AiService {
  constructor() {
    log("AiService constructor");
  }

  doSomething(): string {
    return "AiService did something";
  }
}
