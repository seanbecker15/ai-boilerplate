import { log } from '@ai-contributor/logger';
import { createServer } from "./server";
import { Orchestrator } from './orchestrator';
import { AgentManager } from './agent-manager';
import { RepoManager } from './repo-manager';
import { AiService } from './ai-service';
import { AuthService } from './auth-service';
import { WebSocketService } from './websocket-service';

const port = process.env.PORT || 5001;
const server = createServer();

const orchestrator = new Orchestrator();
const agentManager = new AgentManager();
const repoManager = new RepoManager();
const aiService = new AiService();
const authService = new AuthService();
const webSocketService = new WebSocketService();

agentManager.doSomething();
repoManager.doSomething();
aiService.doSomething();
authService.doSomething();
webSocketService.doSomething();

server.use('/api/orchestrator', orchestrator.router);

server.listen(port, () => {
  log(`api running on ${port}`);
});