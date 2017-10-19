import * as express from 'express';
import * as cors from 'cors';
import * as config from 'config';
import * as bodyParser from 'body-parser';
import { logger } from './utils/logger';
import { router as v1Router } from './v1';

const app = express();
const port = config.get<number>('port') || 3000;
let server: any;

app.use(cors());
app.use(bodyParser.json());
app.disable('x-powered-by');

app.get('/api', (req, res) => {
  res.json({
    health: 'OK'
  });
});

app.use('/api/v1', v1Router);

server = app.listen(port, () => {
  logger.info(`Server started on port: ${port}`);
});

process.on('SIGTERM', () => {
  logger.info('Stopping server');
  if (server) {
    server.stop();
  }
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
