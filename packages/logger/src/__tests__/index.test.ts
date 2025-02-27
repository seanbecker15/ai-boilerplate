import { log } from "..";

vitest.spyOn(global.console, "log");

describe("@ai-boilerplate/logger", () => {
  it("prints a message", () => {
    log("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.log).toBeCalledWith("LOGGER: ", "hello");
  });
});
