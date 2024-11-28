import { log } from "@ai-boilerplate/logger";
import { requireAuth } from "@clerk/express";
import { createServer } from "./server";
import { Example } from "./example";
import { Chat } from "./chat";

const port = process.env.PORT || 5001;
const server = createServer();

const example = new Example();
const chat = new Chat();

server.use("/api/public/example", example.router);
server.use("/api/protected/example", requireAuth(), example.router);
server.use("/api/chat", requireAuth(), chat.router);

server.listen(port, () => {
  log(`api running on ${port}`);
});
