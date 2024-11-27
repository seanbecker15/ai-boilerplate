import { log } from '@ai-contributor/logger';
import { createServer } from "./server";
import { Example } from './example';

const port = process.env.PORT || 5001;
const server = createServer();

const example = new Example();

server.use('/api/example', example.router);

server.listen(port, () => {
  log(`api running on ${port}`);
});