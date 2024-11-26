import { log } from "@ai-contributor/logger";

export class AgentManager {
  constructor() {
    log("AgentManager constructor");
  }

  doSomething(): string {
    return "AgentManager did something";
  }
}
