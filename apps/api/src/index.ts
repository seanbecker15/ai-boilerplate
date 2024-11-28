import { log } from '@ai-boilerplate/logger';
import { createServer } from "./server";
import { Example } from './example';
import { requireAuth } from '@clerk/express';

const port = process.env.PORT || 5001;
const server = createServer();

const example = new Example();

server.use('/api/public/example', example.router);
server.use('/api/protected/example', requireAuth(), example.router)

server.listen(port, () => {
  log(`api running on ${port}`);
});