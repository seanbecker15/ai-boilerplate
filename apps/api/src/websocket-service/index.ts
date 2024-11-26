import { log } from "@ai-contributor/logger";

export class WebSocketService {
  constructor() {
    log("WebSocketService constructor");
  }

  doSomething(): string {
    return "WebSocketService did something";
  }
}
